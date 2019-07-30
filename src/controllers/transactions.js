const { Deposit, Payment, Transference, User } = require('../models')
const users = []

const user = new User( { email:'rivael@gmail.com', password:'senha@123' })
users.push(user)

const create_user = (request, response) => {
    const { email, password} = request.body
    const user = new User({ email, password })
    users.push(user)

    response.status(201).json()
}

const show_income = (request, response) => {
    response.status(200).json(user)
}

const deposit = (request, response) => {
    const { value } = request.body
    const deposit = new Deposit({value: value})
    user.income += value
    response.status(201).json(deposit)
}

module.exports = { show_income, deposit }