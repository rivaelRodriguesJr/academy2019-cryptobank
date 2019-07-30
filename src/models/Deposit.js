class Deposit {
    constructor(params = {}){
        this.userId = params.userId
        this.value = params.value
        this.date = Date.now()
    }
}

module.exports = Deposit