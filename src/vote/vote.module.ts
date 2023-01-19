import { Module } from '@nestjs/common';
import { VoteService } from './vote.service';
import { VoteController } from './vote.controller';
import { GET_VOTE_INBOUND_PORT } from './inbound-port/getVoteInboundPort';

@Module({
  controllers: [VoteController],
  providers: [
    {
      provide: GET_VOTE_INBOUND_PORT,
      useClass: VoteService,
    },
  ],
})
export class VoteModule {}
