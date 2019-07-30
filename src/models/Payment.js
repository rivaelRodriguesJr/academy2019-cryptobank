class Payment {
    constructor(params = {}){
        this.userId = params.userId
        this.value = params.value
        this.date = params.date
    }
}

module.exports = Payment