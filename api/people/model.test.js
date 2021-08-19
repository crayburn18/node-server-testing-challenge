const people = require("./model");
const db = require("../../data/dbConfig");

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
describe("model file", () => {
    describe("getAll()", () => {
        test("can get all people in db", async () => {
            const allpeople = await people.getAll();
            expect(allpeople).toHaveLength(3);
        })
        test("can get all people after inserting", async () => {
            await db("people").insert({ name: "tony" });
            const allpeople = await people.getAll();
            expect(allpeople).toHaveLength(4);
        })
    })
    describe("getById()", () => {
        test("can get people by its id", async () => {
            const jack = await people.getById(1);
            expect(jack).toMatchObject({ people_id: 1, name: "jack" });
        })
    })

    describe("add()", () => {
        test("return new people to the database after adding", async () => {
            await people.add({ name: "newPeople" });
            const allPeople = await people.getAll();
            expect(allPeople).toHaveLength(4);
        })
    })

})