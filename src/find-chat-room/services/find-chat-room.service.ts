import {
    GET_LAST_MESSAGE_BY_CHAT_ROOM_ID_OUTBOUND_PORT,
    GetLastMessageByChatRoomIdPort,
} from './../outbound-port/get-last-message-by-chat-room-id-port';
import { GET_CHAT_ROOM_OUTBOUND_PORT, GetChatRoomOutboundPort } from './../outbound-port/get-chat-room-outbound-port';
import {
    FindChatRoomInboundPort,
    FindChatRoomInboundPortInputDto,
    FindChatRoomInboundPortOutputDto,
} from '../inbound-port/find-chat-room-inbound-port';
import { Inject, Injectable } from '@nestjs/common';
import { concurrent, map, pipe, toArray, toAsync } from '@fxts/core';

@Injectable()
export class FindChatRoomService implements FindChatRoomInboundPort {
    constructor(
        @Inject(GET_CHAT_ROOM_OUTBOUND_PORT)
        private readonly getChatRoomOutboundPort: GetChatRoomOutboundPort,
        @Inject(GET_LAST_MESSAGE_BY_CHAT_ROOM_ID_OUTBOUND_PORT)
        private readonly getLastMessageByChatRoomIdPort: GetLastMessageByChatRoomIdPort,
    ) {}

    async execute(params: FindChatRoomInboundPortInputDto): Promise<FindChatRoomInboundPortOutputDto> {
        try {
            const roomsAsHost = this.getChatRoomOutboundPort.execute({ where: { dogId: params.dogId } });
            const roomsAsGuest = this.getChatRoomOutboundPort.execute({ where: { chatPairDogId: params.dogId } });
            const chatRooms = (await Promise.all([roomsAsHost, roomsAsGuest])).flat();

            console.log(`chatRooms: ${chatRooms}`);

            const lastMessages = await pipe(
                chatRooms,
                map(room => room.id),
                toAsync,
                map(chatRoomId => this.getLastMessageByChatRoomIdPort.execute({ chatRoomId })),
                concurrent(50),
                toArray,
            );

            return chatRooms
                .map((room, idx) => {
                    const lastMessage = lastMessages[idx];

                    return {
                        id: room.id,
                        chatPairDog: {
                            id: room.pairDogId,
                            name: room.pairDogName,
                        },
                        lastMessage: {
                            id: lastMessage.id,
                            text: lastMessage.text,
                            createdAt: lastMessage.createdAt,
                        },
                    };
                })
                .sort((a, b) => b.lastMessage.createdAt - a.lastMessage.createdAt);
        } catch (e) {
            console.log(e);
        }
    }
}
