import {
    GoogleSearchOutboundInputDto,
    GoogleSearchOutboundOutputDto,
    GoogleSearchOutboundPort,
} from './google-search-outbound-port/google-search-outbound-port';
import { Test, TestingModule } from '@nestjs/testing';
import { GoogleSearchService } from './google-search.service';

describe('GoogleSearchService Test', () => {
    class MockingGoogleSearchOutboundAdapter implements GoogleSearchOutboundPort {
        private readonly result: GoogleSearchOutboundOutputDto;

        constructor(result: GoogleSearchOutboundOutputDto) {
            this.result = result;
        }

        async execute(params: GoogleSearchOutboundInputDto): Promise<GoogleSearchOutboundOutputDto> {
            return this.result;
        }
    }
    test('9~10자리 앱 ID를 반환한다.', async () => {
        const params = [
            'https://www.google.com/search?q=a123456789',
            'https://www.google.com/search?q=b3456798001',
            'https://www.google.com/search?q=c12309120390',
            'https://www.google.com/search?q=d419204129',
            'https://www.google.com/search?q=e419256920',
        ];

        const googleSearchService = new GoogleSearchService(new MockingGoogleSearchOutboundAdapter(params));
        const result = await googleSearchService.execute({ keyword: ['a', 'b', 'c'] });
        expect(result).toStrictEqual(['123456789', '3456798001', '419204129', '419256920']);
    });

    test('중복된 앱 ID를 제거하고 반환한다.', async () => {
        const params = [
            'https://www.google.com/search?q=a123456789',
            'https://www.google.com/search?q=a123456789',
            'https://www.google.com/search?q=a123456789',
            'https://www.google.com/search?q=b3456798001',
            'https://www.google.com/search?q=b3456798001',
            'https://www.google.com/search?q=c12309120390',
            'https://www.google.com/search?q=d419204129',
            'https://www.google.com/search?q=e419256920',
            'https://www.google.com/search?q=e419256920',
            'https://www.google.com/search?q=e419256920',
        ];

        const googleSearchService = new GoogleSearchService(new MockingGoogleSearchOutboundAdapter(params));
        const result = await googleSearchService.execute({ keyword: ['a', 'b', 'c'] });
        expect(result).toStrictEqual(['123456789', '3456798001', '419204129', '419256920']);
    });

    test('잘못된 URI는 제거하고 반환한다.', async () => {
        const params = [
            'https://www.daum.net/search?q=a123456789',
            'https://www.google.com/search?q=b3456798001',
            'https://www.google.com/search?q=b3456798001',
            'https://www.google.com/search?q=c12309120390',
            'https://www.google.com/search?q=d419204129',
            'https://www.google.com/search?q=e419256920',
            'https://www.naver.com/search?q=f51029100123',
        ];

        const googleSearchService = new GoogleSearchService(new MockingGoogleSearchOutboundAdapter(params));
        const result = await googleSearchService.execute({ keyword: ['a', 'b', 'c'] });
        expect(result).toStrictEqual(['3456798001', '419204129', '419256920']);
    });

    test('google search engine이 null일 때 빈 배열을 반환한다.', async () => {
        const googleSearchService = new GoogleSearchService(new MockingGoogleSearchOutboundAdapter(null));
        const result = await googleSearchService.execute({ keyword: ['a', 'b', 'c'] });
        expect(result).toStrictEqual([]);
    });
});
