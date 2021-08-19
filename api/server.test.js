const request = require("supertest");
const server = require("./server");
const db = require("../data/dbConfig");


beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})
beforeEach(async () => {
    await db('people').truncate()
    await db.seed.run()
})
afterAll(async () => {
    await db.destroy()
})

describe("[GET] /", () => {
    test("returns a status 200 OK", async () => {
        const res = await request(server).get("/api/people");
        expect(res.status).toBe(200);
    })
})

describe("[POST] /", () => {
    test("returns status 201 when added", async () => {
        const res = await request(server).post("/api/people").send({ name: "mewtoo" });
        expect(res.status).toBe(201);
    })
    test("returns new added people", async () => {
        const res = await request(server).post("/api/people").send({ name: "mewtoo" });
        expect(res.body).toMatchObject({ people_id: 4, name: "mewtoo" });
    })
})