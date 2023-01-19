export type GoogleSearchInboundInputDto = {
    keyword: Array<string>;
};

export type GoogleSearchInboundOutputDto = Array<string> | null;

export const GOOGLE_SEARCH_INBOUND_PORT = 'GOOGLE_SEARCH_INBOUND_PORT';

export interface GoogleSearchInboundPort {
    execute(params: GoogleSearchInboundInputDto): Promise<GoogleSearchInboundOutputDto>;
}
