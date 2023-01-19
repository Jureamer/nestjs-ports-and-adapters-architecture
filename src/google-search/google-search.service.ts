import {
    GoogleSearchOutboundPort,
    GOOGLE_SEARCH_OUTBOUND_PORT,
} from './google-search-outbound-port/google-search-outbound-port';
import {
    GoogleSearchInboundPort,
    GoogleSearchInboundInputDto,
    GoogleSearchInboundOutputDto,
} from './google-search-inbound-port/google-search-inbound-port';
import { Inject, Injectable } from '@nestjs/common';
import { filter, head, map, pipe, toArray, uniq } from '@fxts/core';

@Injectable()
export class GoogleSearchService implements GoogleSearchInboundPort {
    constructor(
        @Inject(GOOGLE_SEARCH_OUTBOUND_PORT)
        private readonly googleSearchOutboundPort: GoogleSearchOutboundPort,
    ) {}

    async execute(params: GoogleSearchInboundInputDto): Promise<GoogleSearchInboundOutputDto> {
        try {
            const searchResult = await this.googleSearchOutboundPort.execute(params);

            if (!searchResult) {
                return [];
            }

            const result = pipe(
                searchResult,
                filter(link => link.includes('https://www.google.com')),
                map(link => link.match(/[0-9]+/gi)),
                map(head),
                filter(appId => appId.length < 11 && appId.length > 8),
                uniq,
                toArray,
            );
            console.log(result);
            return result;
        } catch (e) {
            throw e;
        }
    }
}
