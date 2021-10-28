const express = require("express");
const {findAllExpenses, createExpenses, findExpenseById} = require("../controller/expenses.controller");
const router = express.Router()

// http://localhost:9001/expenses
router.route('/')
    .get(findAllExpenses)
    .post(createExpenses)

router.route('/:id')
    .get(findExpenseById)
    .patch()
    .delete()


module.exports = router;