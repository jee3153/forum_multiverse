const Post = require('./Post')

class Posts {
    constructor() {
        this.list = []
    }

    addPost(author, content, title) {
        const p = new Post(author, content, title);
        this.list.push(p);
    }

    deletePost(post, user) {
        if (post.author.id === user.id) {
            const i = this.list.findIndex(p => p.id === post.id)
            console.log(i);
            this.list.splice(i, 1);
        }
    }
}

module.exports = Posts;