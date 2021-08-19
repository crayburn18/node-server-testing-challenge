  
const router = require("express").Router();
const people = require("./model");

router.get("/", (req, res, next) => {
    people.getAll()
        .then(allPeople => {
            res.status(200).json(allPeople);
        })
})
router.post("/", (req, res, next) => {
    people.add(req.body)
        .then(newPeople => {
            res.status(201).json(newPeople);
        })
})
router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        status: err.status || 500,
        message: err.message
    })
})

module.exports = router;