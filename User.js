const Comments = require('./Comments');
const Posts = require('./Posts');
const { v4 } = require('uuid');

class User {
    constructor(username) {
        this.id = v4();
        this.username = username;
        // this.comments = new Comments();
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

    canPost(commentList, forumName) {
        // console.log(commentList)
        let count = 0;
        for (const comment of commentList) {
            if (comment.author.id === this.id && comment.forumName === forumName) {
                count++;
            }

            if (count >= 3) return true;
        }
        return false;
    }

    isAuthor(postOrComment) {
        return postOrComment.author.id === this.id;
    }
}

module.exports = User;