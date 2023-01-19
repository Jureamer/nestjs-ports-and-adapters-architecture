export type GetVoteOutboundInputDto = {
  votes: Array<{ choice: number }>;
  include: Array<number>;
};

export type Rate = {
  [p: string]: number;
};
export type GetVoteOutboundOutputDto = {
  rate: Array<{ choice: number }>;
  total: number;
};

export const VOTE_OUTBOUND_PORT = 'VOTE_OUTBOUND_PORT';

export interface VoteOutboundPort {
  execute(input: VoteOutboundInputDto): Promise<VoteOutboundOutputDto>;
}
