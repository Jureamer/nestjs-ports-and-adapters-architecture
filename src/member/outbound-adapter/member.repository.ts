import {
    FindMemberOutboundInputDto,
    FindMemberOutboundOutputDto,
    FindMemberOutboundPort,
} from '../outbound-port/findMemberOutboundPort';
import { MemberDatabase } from '../data/member';

export class MemberRepository implements FindMemberOutboundPort {
    async execute(params: FindMemberOutboundInputDto): Promise<FindMemberOutboundOutputDto> {
        const members = await MemberDatabase.getMembers();

        return members.map(member => {
            return {
                name: member.name,
                email: member.email,
                phone: member.phone,
            };
        });
    }
}
