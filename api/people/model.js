const db = require("../../data/dbConfig");

const getAll = () => {
    return db("people");
}

const getById = (id) => {
    return db("people").where("people_id", id).first();
}

const add = async (people) => {
    const id = await db("people").insert(people);
    return getById(id);
}

module.exports = {
    getAll,
    getById,
    add
}