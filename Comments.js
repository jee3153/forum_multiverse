const Comment = require('./Comment');

class Comments {
    constructor() {
        this.list = []
    }

    addComment(author, content) {
        const c = new Comment(author, content);
        this.list.push(c);
    }

    readAllComents() {
        this.list.forEach(comment => {
            console.log(comment.content);
        })
    }
}

module.exports = Comments;