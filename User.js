const Comments = require('./Comments');
const Posts = require('./Posts');
const { v4 } = require('uuid');

class User {
    constructor(username) {
        this.id = v4();
        this.username = username;
        // this.comments = new Comments();
        // this.posts = new Posts();
    }

    editUsername(nameToChange) {
        this.username = nameToChange;
    }
}

module.exports = User;