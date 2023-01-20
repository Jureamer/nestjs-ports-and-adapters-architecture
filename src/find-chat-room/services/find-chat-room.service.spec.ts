import { Test, TestingModule } from '@nestjs/testing';
import { GetChatRoomRepository } from '../outbound-adapter/get-chat-rooms.reposiotry';
import { GetLastMessageByChatRoomIdRepository } from '../outbound-adapter/get-last-message-by-chat-room-id.repository';
import { FindChatRoomService } from './find-chat-room.service';

describe('FindChatRoomService Test', () => {
    test('테스트 결과 정상 확인', async () => {
        const findChatRoomService = new FindChatRoomService(
            new GetChatRoomRepository(),
            new GetLastMessageByChatRoomIdRepository(),
        );
        const result = await findChatRoomService.execute({ dogId: 1 });

        expect(result).toStrictEqual([
            {
                id: 1,
                chatPairDog: { id: 4, name: 'A' },
                lastMessage: { id: 100, text: 'cool1', createdAt: 10000 },
            },
            {
                id: 4,
                chatPairDog: { id: 7, name: 'D' },
                lastMessage: { id: 400, text: 'cool4', createdAt: 8000 },
            },
            {
                id: 3,
                chatPairDog: { id: 6, name: 'C' },
                lastMessage: { id: 300, text: 'cool3', createdAt: 7000 },
            },
            {
                id: 2,
                chatPairDog: { id: 5, name: 'B' },
                lastMessage: { id: 200, text: 'cool2', createdAt: 6000 },
            },
            {
                id: 5,
                chatPairDog: { id: 8, name: 'E' },
                lastMessage: { id: 500, text: 'cool5', createdAt: 4000 },
            },
            {
                id: 6,
                chatPairDog: { id: 9, name: 'F' },
                lastMessage: { id: 600, text: 'cool6', createdAt: 2000 },
            },
        ]);
    }, 150000);
});
