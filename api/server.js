"use strict";
// import fastify, { FastifyReply, FastifyRequest } from "fastify";
// const server = fastify();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
// Import dependencies
const tap_1 = require("tap");
const app_1 = require("../app"); // Import your Fastify app instance
const node_fetch_1 = __importDefault(require("node-fetch"));
(0, tap_1.test)('GET /api/users', (t) => __awaiter(void 0, void 0, void 0, function* () {
    // Build your Fastify app instance
    const app = (0, app_1.build)();
    // Send a request to your API endpoint
    const response = yield app.inject({
        method: 'GET',
        url: '/api/users',
    });
    // Ensure the response status code is 200 (OK)
    t.equal(response.statusCode, 200, 'Status code should be 200');
    // Ensure the response body is valid JSON
    t.doesNotThrow(() => JSON.parse(response.payload), 'Response should be valid JSON');
    // Ensure the response body has the expected structure
    const responseData = JSON.parse(response.payload);
    t.type(responseData, 'object', 'Response should be an object');
    t.ok(Object.keys(responseData).length > 0, 'Response should not be empty');
    // Add more assertions as needed based on the expected response structure
    // Close the Fastify app instance
    yield app.close();
}));
(0, tap_1.test)('Transform data from API to new data grouped by department', (t) => __awaiter(void 0, void 0, void 0, function* () {
    // Fetch data from the API
    const response = yield (0, node_fetch_1.default)('https://dummyjson.com/users');
    const data = yield response.json();
    // Perform transformation
    // Add your transformation logic here
    // Ensure the transformed data meets the expected structure and content
    // Add assertions to verify the transformed data
    // Example assertions:
    // t.type(transformedData, 'object', 'Transformed data should be an object');
    // t.equal(Object.keys(transformedData).length, expectedLength, 'Transformed data should have the expected length');
}));
