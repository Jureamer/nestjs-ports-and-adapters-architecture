import { Module } from '@nestjs/common';
import { MemberService } from './services/member.service';
import { MemberController } from './controller/member.controller';
import { MemberRepository } from './outbound-adapter/member.repository';

@Module({
  controllers: [MemberController],
  providers: [
    MemberService,
    MemberRepository]
})
export class MemberModule {}
