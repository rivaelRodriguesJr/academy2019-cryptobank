const router = require('express').Router()
const { transactions } = require('../controllers')

router.get('/', transactions.show_income)
router.post('/', transactions.deposit)

module.exports = router