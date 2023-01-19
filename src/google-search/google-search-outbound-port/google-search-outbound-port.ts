export type GoogleSearchOutboundInputDto = {
    keyword: Array<string>;
};

export type GoogleSearchOutboundOutputDto = Array<string>;

export const GOOGLE_SEARCH_OUTBOUND_PORT = 'GOOGLE_SEARCH_OUTBOUND_PORT';

export interface GoogleSearchOutboundPort {
    execute(params: GoogleSearchOutboundInputDto): Promise<GoogleSearchOutboundOutputDto>;
}
