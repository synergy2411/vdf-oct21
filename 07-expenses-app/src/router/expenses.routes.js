const express = require("express");
const {findAllExpenses, createExpenses} = require("../controller/expenses.controller");
const router = express.Router()

// http://localhost:9001/expenses
router.route('/')
    .get(findAllExpenses)
    .post(createExpenses)
    .patch()
    .delete()


module.exports = router;