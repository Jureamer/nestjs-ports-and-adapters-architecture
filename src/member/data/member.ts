import { Member } from "../outbound-port/findMemberOutboundPort";



export const MemberDatabase = (() => {
    const members: Member[] = [
        {
            id: 123,
            name: 'John Doe',
            email: "www.eee@gmail.com",
            phone: '000-111-2222'
        },
        {
            id: 456,
            name: 'Kim chi',
            email: "ilikekimchi@gmail.com",
            phone: '000-345-6666'
        },
    ]
    
    return {
        getMembers: () => {
            return Promise.resolve(members)
        }
    }
})()