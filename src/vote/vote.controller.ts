import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VoteService } from './vote.service';
import { CreateVoteDto } from './dto/create-vote.dto';
import { GetVoteInboundPort } from './inbound-port/getVoteInboundPort';

@Controller('vote')
export class VoteController {
    constructor(private readonly voteService: GetVoteInboundPort) {}

    private params = {
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

    @Post()
    execute() {
        return this.voteService.execute(this.params);
    }
}
