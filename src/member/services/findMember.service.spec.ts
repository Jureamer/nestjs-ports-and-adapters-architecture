import {
    FindMemberOutboundInputDto,
    FindMemberOutboundOutputDto,
    FindMemberOutboundPort,
} from '../outbound-port/findMemberOutboundPort';
import { FindMemberService } from './findMember.service';

describe('Find Member Service 모듈 테스트', () => {
    class MockFindmemberOutboundPort implements FindMemberOutboundPort {
        private readonly result: FindMemberOutboundOutputDto;
        constructor(result: FindMemberOutboundOutputDto) {
            this.result = result;
        }

        execute(
            param: FindMemberOutboundInputDto,
        ): Promise<FindMemberOutboundOutputDto> {
            return Promise.resolve(this.result);
        }
    }
    test('멤버 리스트가 정상적으로 조회되었습니다.', async () => {
        const members = [
            {
                id: 123,
                name: 'John Doe',
                email: 'www.eee@gmail.com',
                phone: '000-111-2222',
            },
            {
                id: 456,
                name: 'Kim chi',
                email: 'ilikekimchi@gmail.com',
                phone: '000-345-6666',
            },
        ];

        const findMemberService = new FindMemberService(
            new MockFindmemberOutboundPort(members),
        );

        const result = await findMemberService.execute();
        expect(result).toStrictEqual(members);
    });
});
