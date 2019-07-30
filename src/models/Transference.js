class Transference {
    constructor(params = {}){
        this.value = params.value
        this.date = params.date
        this.giverId = params.giverId
        this.recieverId = params.recieverId
    }
}

module.exports = Transference