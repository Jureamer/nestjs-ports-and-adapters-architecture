import {
    GetChatRoomOutboundPort,
    GetChatRoomOutboundPortInputDto,
    GetChatRoomOutboundPortOutputDto,
} from './../outbound-port/get-chat-room-outbound-port';
export class GetChatRoomRepository implements GetChatRoomOutboundPort {
    async execute(params: GetChatRoomOutboundPortInputDto): Promise<GetChatRoomOutboundPortOutputDto> {
        const baseQuery = `
            SELECT cr.id, d.id, d.name
            FROM chat_rooms AS cr
        `;

        const { where } = params;

        if ('dogId' in where) {
            const query = `
                ${baseQuery}
                INNER JOIN dogs AS d 
                ON cr.pair_dog_id = d.id
                WHERE cr.dog_id = ${where.dogId}
            `;
            console.log(query);

            return this.asHost;
        }

        if ('chatPairDogId' in where) {
            const query = `
                ${baseQuery}
                INNER JOIN dogs AS d ON cr.dog_id = d.id    
                WHERE cr.chat_pair_id = ${where.chatPairDogId}
            `;

            console.log(query);

            return this.asGuest;
        }

        throw TypeError(`DO NOT SUPPORT ${where}`);
    }

    private readonly asHost = [
        {
            id: 1,
            pairDogId: 4,
            pairDogName: 'A',
        },
        {
            id: 2,
            pairDogId: 5,
            pairDogName: 'B',
        },
        {
            id: 3,
            pairDogId: 6,
            pairDogName: 'C',
        },
    ];

    private readonly asGuest = [
        {
            id: 4,
            pairDogId: 7,
            pairDogName: 'D',
        },
        {
            id: 5,
            pairDogId: 8,
            pairDogName: 'E',
        },
        {
            id: 6,
            pairDogId: 9,
            pairDogName: 'F',
        },
    ];
}
