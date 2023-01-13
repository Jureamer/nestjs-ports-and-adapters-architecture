import {
    FindMemberInboundInputDto,
    FindMemberInboundOutputDto,
    FindMemberInboundPort,
} from '../inbound-port/findMemberInboundPort';
import { Inject, Injectable } from '@nestjs/common';
import {
    FINDALL_OUTBOUND_PORT,
    FindMemberOutboundPort,
} from '../outbound-port/findMemberOutboundPort';

@Injectable()
export class FindMemberService implements FindMemberInboundPort {
    constructor(
        @Inject(FINDALL_OUTBOUND_PORT)
        private readonly findMemberOutboundPort: FindMemberOutboundPort,
    ) {}

    async execute(
        param: FindMemberInboundInputDto,
    ): Promise<FindMemberInboundOutputDto> {
        return await this.findMemberOutboundPort.execute();
    }
}
