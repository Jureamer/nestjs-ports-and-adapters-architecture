export type FindMemberInboundInputDto = void
export type FindMemberInboundOutputDto = Array<{
    name: string,
    email: string,
    phone: string,
}>;

export const FINDALL_INBOUND_PORT = "FINDALL_INBOUND_PORT";

export interface FindMemberInboundPort {
    execute(param: FindMemberInboundInputDto): Promise<FindMemberInboundOutputDto>
}