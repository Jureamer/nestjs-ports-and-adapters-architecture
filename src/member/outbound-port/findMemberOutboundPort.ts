export type Member = {
    id: number
    name: string,
    email: string,
    phone: string,
}

export type MemberList = Member[]

export const FINDALL_OUTBOUND_PORT = "FINDALL_OUTBOUND_PORT"

export type FindMemberOutboundInputDto = void
export type FindMemberOutboundOutputDto = Array<Omit<Member, 'id'>>

export interface FindMemberOutboundPort {
    execute(params: FindMemberOutboundInputDto): Promise<FindMemberOutboundOutputDto>
}