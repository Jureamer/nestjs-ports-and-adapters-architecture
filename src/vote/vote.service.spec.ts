import { VoteService } from './vote.service';

describe('VoteService', () => {
    test('should be defined', () => {
        const params = {
            votes: [
                {
                    choice: 1,
                },
                {
                    choice: 2,
                },
                {
                    choice: 3,
                },
            ],
            include: [1, 2, 3],
        };
        const getVoteService = new VoteService();
        const result = getVoteService.execute(params);
        expect(result).toStrictEqual({
            rate: {
                1: 33,
                2: 33,
                3: 33,
            },
            totalCount: 3,
        });
    });
});
