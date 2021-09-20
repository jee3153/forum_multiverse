const User = require('./User');
class Users {
    constructor() {
        this.list = []
    }

    addNewUser(username) {
        const user = new User(username);
        this.list.push(user);
    }
}

module.exports = Users;