const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.post('/', (req, res) => {
    console.log(req.body);

    let queryText = `
    INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);
    `

    const values = [req.body.feeling, req.body.understanding, req.body.support, req.body.comment];

    pool.query(queryText, values)
    .then(result => {
        res.sendStatus(201)
    }).catch(error => {
        console.log(error);
        res.sendStatus(error);
    })
})

module.exports = router;