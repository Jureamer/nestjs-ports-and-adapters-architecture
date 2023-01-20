import { Controller } from '@nestjs/common';
import { FindChatRoomService } from './../services/find-chat-room.service';

@Controller('find-chat-room')
export class FindChatRoomController {
    constructor(private readonly findChatRoomService: FindChatRoomService) {}
}
