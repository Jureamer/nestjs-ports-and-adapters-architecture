import { Module } from '@nestjs/common';
import { FindMemberService } from './services/findMember.service';
import { MemberController } from './controller/findMember.controller';
import { MemberRepository } from './outbound-adapter/member.repository';
import { FINDALL_INBOUND_PORT } from './inbound-port/findMemberInboundPort';
import { FINDALL_OUTBOUND_PORT } from './outbound-port/findMemberOutboundPort';

@Module({
    controllers: [MemberController],
    providers: [
        {
            provide: FINDALL_INBOUND_PORT,
            useClass: FindMemberService,
        },
        {
            provide: FINDALL_OUTBOUND_PORT,
            useClass: MemberRepository,
        },
    ],
})
export class MemberModule {}
