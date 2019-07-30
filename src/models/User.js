class User {
    constructor(params = {}){
        this.email = params.email
        this.password = params.password
        this.income = 0.0
        this.memberSince = Date.now()
        this.lastUpdate = Date.now()
    }
}

module.exports = User