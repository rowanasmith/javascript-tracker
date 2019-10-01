const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('Get list items');
    pool.query(`SELECT "projects"."day" as "project_day", 
    "projects"."name" as "project_name", 
    "projects"."description" as "project_description",
   "projects"."url" as "project_url"`)
    .then (response => {
        res.send(response.rows);
    })
});



module.exports = router;
