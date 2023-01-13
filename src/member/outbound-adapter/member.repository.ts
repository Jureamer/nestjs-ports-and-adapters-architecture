type Member = {
    id: number,
    name: string,
    email: string,
    phone: string
}

const member: Member = {
    id: 1234,
    name: "Han",
    email: "ww@naver.com",
    phone: "000-1111-2222"
}

export class MemberRepository {
    async findAll(): Promise<Member> {
        return new Promise((resolve, reject) => {
            return resolve(member)
        })
    }
}