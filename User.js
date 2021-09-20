const Comments = require('./Comments');
const Posts = require('./Posts');
const { v4 } = require('uuid');

class User {
    constructor(username) {
        this.id = v4();
        this.username = username;
        this.comments = new Comments();
        this.posts = new Posts();
        this.admin = false;
    }

    editUsername(nameToChange) {
        this.username = nameToChange;
    }

    giveAuthority() {
        this.admin = true;
    }

    isAdmin() {
        return this.admin;
    }

    canPost() {
        return this.comments.list.length >= 3;
    }
}

module.exports = User;