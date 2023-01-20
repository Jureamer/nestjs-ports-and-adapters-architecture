import { Module } from '@nestjs/common';
import { FindChatRoomService } from './services/find-chat-room.service';
import { FindChatRoomController } from './controllers/find-chat-room.controller';

@Module({
    controllers: [FindChatRoomController],
    providers: [FindChatRoomService],
})
export class FindChatRoomModule {}
