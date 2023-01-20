export const FIND_CHAT_ROOM_INBOUNDPort_PORT = 'FIND_CHAT_ROOM_INBOUNDPort_PORT' as const;

export type FindChatRoomInboundPortInputDto = {
    dogId: number;
};
export type FindChatRoomInboundPortOutputDto = Array<{
    id: number;
    chatPairDog: {
        id: number;
        name: string;
    };
    lastMessage: {
        id: number;
        text: string;
        createdAt: number;
    };
}>;

export interface FindChatRoomInboundPort {
    execute(params: FindChatRoomInboundPortInputDto): Promise<FindChatRoomInboundPortOutputDto>;
}
