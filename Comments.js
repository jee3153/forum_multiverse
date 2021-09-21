const Comment = require('./Comment');

class Comments {
    constructor() {
        this.list = []
    }

    addComment(author, content, forumName) {
        const c = new Comment(author, content, forumName);
        this.list.push(c);
    }

    readAllComents() {
        this.list.forEach(comment => {
            console.log(comment.content);
        })
    }
}

module.exports = Comments;