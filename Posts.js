const Post = require('./Post')

class Posts {
    constructor() {
        this.list = []
    }

    addPost(author, content, title) {
        const p = new Post(author, content, title);
        this.list.push(p);
    }
}

module.exports = Posts;