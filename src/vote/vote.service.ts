import { countBy, entries, filter, fromEntries, map, pipe, toArray } from '@fxts/core';
import { Injectable } from '@nestjs/common';
import { GetVoteInboundInputDto, GetVoteInboundOutputDto, GetVoteInboundPort } from './inbound-port/getVoteInboundPort';

@Injectable()
export class VoteService implements GetVoteInboundPort {
    constructor() {}

    execute(params: GetVoteInboundInputDto): GetVoteInboundOutputDto {
        const filtered = pipe(
            params.votes,
            filter(({ choice }) => params.include.includes(choice)),
            toArray,
        );

        const totalLength = filtered.length;

        const rate = pipe(
            filtered,
            countBy(({ choice }) => choice),
            entries,
            map(([choice, count]) => [choice, this.getRate(count, totalLength)]),
            toArray,
            rates => fromEntries(rates as [string, number][]),
        );

        return {
            rate: rate,
            totalCount: totalLength,
        };
    }

    private getRate(count: number, totalCount: number) {
        return Math.round((count / totalCount) * 100);
        // return Math.round(num * 100 / 100;
    }
}
