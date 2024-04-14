// import fastify, { FastifyReply, FastifyRequest } from "fastify";
// const server = fastify();

// interface PostData {
//     data: any;
// }

// server.get('/' , (req , reply) => {
//     reply.send("Hello world from api")
// })

// server.post("/api/data", async (request: FastifyRequest<{ Body: PostData }>, reply: FastifyReply) => {
//     try {
//         const { data } = request.body;
//         // ทำสิ่งที่คุณต้องการกับข้อมูลที่ได้รับ เช่น บันทึกลงฐานข้อมูล หรือประมวลผลต่อไป
//         console.log("Received data:", data);
        
//         // ส่งข้อความกลับว่าข้อมูลถูกต้อง
//         reply.code(200).send({ receivedData: data });
//     } catch (error) {
//         console.error("Error processing data:", error);
//         reply.code(500).send({ error: "Internal Server Error" });
//     }
// });

// const start = async () => {
//     try {
//         await server.listen(4000);
//         console.log("server online http://localhost:4000");
//     } catch (err) {
//         console.error("Error start server", err);
//         process.exit(1);
        
//     }
// }

// start();

import axios from "axios";

interface User {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    age: number;
    hair: {
        color: string;
    };
    address: {
        postalCode: string;
    };
    company: {
        department: string;
    };
}

async function fetchData(): Promise<User[]> {
    try {
        const response = await axios.get('https://dummyjson.com/users');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

function groupByDepartment(users: User[]): Record<string, any> {
    const groupedData: Record<string, any> = {};

    users.forEach(user => {
        const { gender, hair, address, company } = user;
        const department = company.department;

        if (!groupedData[department]) {
            groupedData[department] = {
                male: 0,
                female: 0,
                hair: {},
                addressUser: {}
            };
        }

        if (gender === 'male') {
            groupedData[department].male++;
        } else if (gender === 'female') {
            groupedData[department].female++;
        }

        const hairColor = hair.color;
        groupedData[department].hair[hairColor] = (groupedData[department].hair[hairColor] || 0) + 1;

        const { firstName, lastName } = user;
        groupedData[department].addressUser[`${firstName}${lastName}`] = address.postalCode;
    });

    return groupedData;
}

async function main() {
    const users = await fetchData();
    const groupedData = groupByDepartment(users);
    console.log(JSON.stringify(groupedData, null, 2));
}

main();