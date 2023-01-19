import {
    GoogleSearchOutboundInputDto,
    GoogleSearchOutboundOutputDto,
    GoogleSearchOutboundPort,
} from './../google-search-outbound-port/google-search-outbound-port';

const httpLink = [
    'http://www.google.com/search?q=a123456789',
    'http://www.google.com/search?q=b3456798001',
    'http://www.google.com/search?q=c12309120390',
    'http://www.google.com/search?q=d419204129',
    'http://www.google.com/search?q=e419256920',
    'http://www.naver.com/search?q=f51029100123',
];

export class GoogleSearchAdapter implements GoogleSearchOutboundPort {
    execute(params: GoogleSearchOutboundInputDto): Promise<GoogleSearchOutboundOutputDto> {
        return Promise.resolve(httpLink);
    }
}
