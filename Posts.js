const Post = require('./Post')

class Posts {
    constructor() {
        this.list = []
    }

    addPost(author, content, title, forumName) {
        const p = new Post(author, content, title, forumName);
        this.list.push(p);
    }

    deletePost(post, user) {
        if (post.author.id === user.id || user.isAdmin()) {
            const i = this.list.findIndex(p => p.id === post.id)
            this.list.splice(i, 1);
        }
    }
}

module.exports = Posts;