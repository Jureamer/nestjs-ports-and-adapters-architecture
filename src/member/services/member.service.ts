import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from '../dto/create-member.dto';
import { UpdateMemberDto } from '../dto/update-member.dto';
import { MemberRepository } from '../outbound-adapter/member.repository';

@Injectable()
export class MemberService {

  constructor(private readonly memberRepository: MemberRepository) {}

  findAll() {
    return this.memberRepository.findAll();
  }

}
