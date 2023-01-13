export const FINDALL_OUTBOUND_PORT = 'FINDALL_OUTBOUND_PORT';

export type FindMemberOutboundInputDto = void;
export type FindMemberOutboundOutputDto = Array<{
    name: string;
    email: string;
    phone: string;
}>;

export interface FindMemberOutboundPort {
    execute(
        params: FindMemberOutboundInputDto,
    ): Promise<FindMemberOutboundOutputDto>;
}
