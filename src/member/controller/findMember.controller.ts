import { Controller, Get, Inject } from '@nestjs/common';
import {
    FINDALL_INBOUND_PORT,
    FindMemberInboundOutputDto,
    FindMemberInboundPort,
} from '../inbound-port/findMemberInboundPort';

@Controller()
export class MemberController {
    constructor(
        @Inject(FINDALL_INBOUND_PORT)
        private readonly findMemberInboundPort: FindMemberInboundPort,
    ) {}

    @Get('/members')
    async handle(): Promise<FindMemberInboundOutputDto> {
        return await this.findMemberInboundPort.execute();
    }
}
