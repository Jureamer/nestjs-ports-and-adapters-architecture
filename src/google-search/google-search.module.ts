import { GoogleSearchAdapter } from './google-search-outbound-adapter/google-search-outbound-adapter';
import { GOOGLE_SEARCH_OUTBOUND_PORT } from './google-search-outbound-port/google-search-outbound-port';
import { GOOGLE_SEARCH_INBOUND_PORT } from './google-search-inbound-port/google-search-inbound-port';
import { Module } from '@nestjs/common';
import { GoogleSearchService } from './google-search.service';
import { GoogleSearchController } from './google-search.controller';

@Module({
    controllers: [GoogleSearchController],
    providers: [
        {
            provide: GOOGLE_SEARCH_INBOUND_PORT,
            useClass: GoogleSearchService,
        },
        {
            provide: GOOGLE_SEARCH_OUTBOUND_PORT,
            useClass: GoogleSearchAdapter,
        },
    ],
})
export class GoogleSearchModule {}
