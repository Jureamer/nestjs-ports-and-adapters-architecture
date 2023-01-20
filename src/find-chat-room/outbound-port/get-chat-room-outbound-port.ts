export const GET_CHAT_ROOM_OUTBOUND_PORT = 'GET_CHAT_ROOM_OUTBOUND_PORT' as const;

export type GetChatRoomOutboundPortInputDto = {
    where: { dogId: number } | { chatPairDogId: number };
};
export type GetChatRoomOutboundPortOutputDto = Array<{
    id: number;
    pairDogId: number;
    pairDogName: string;
}>;

export interface GetChatRoomOutboundPort {
    execute(params: GetChatRoomOutboundPortInputDto): Promise<GetChatRoomOutboundPortOutputDto>;
}
