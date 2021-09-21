const Comments = require('./Comments')
const Text = require('./Text');
const User = require('./User');


class Post extends Text {
    constructor(author, content, title, forumName) {
        super(author, content);
        this.title = title;
        this.comments = new Comments();
        this.forumName = forumName
    }

    addComment(author, content) {
        this.comments.addComment(author, content, this.forumName);
        author.comments.addComment(author, content, this.forumName)
    }

    deleteComment(comment, user) {
        const comments = this.comments.list;
        if (comments.length === 0) {
            throw new Error('the list is empty.');
        }

        if (user.isAdmin() || user.isAuthor(comment)) {
            const i = this.comments.list.findIndex(c => c.id === comment.id);
            this.comments.list.splice(i, 1);
        }
        
    }

    editContent(changedContent) {
        this.content = changedContent;
    }

    editTitle(changedTitle) {
        this.title = changedTitle;
    }

    readAllComments() {
        this.comments.list.forEach(c => {
            console.log(`author: ${c.author}: ${c.content}`)
        })
    }
}

module.exports = Post;