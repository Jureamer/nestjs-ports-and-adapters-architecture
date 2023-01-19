export type GetVoteInboundInputDto = {
    votes: Array<{ choice: number }>;
    include: Array<number>;
};

export type Rate = {
    [p: string]: number;
};

export type GetVoteInboundOutputDto = {
    rate: Rate;
    totalCount: number;
};

export const GET_VOTE_INBOUND_PORT = 'GET_VOTE_INBOUND_PORT';

export interface GetVoteInboundPort {
    execute(params: GetVoteInboundInputDto): GetVoteInboundOutputDto;
}
