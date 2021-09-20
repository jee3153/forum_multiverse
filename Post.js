const Comments = require('./Comments')
const Text = require('./Text');
const User = require('./User');


class Post extends Text {
    constructor(author, content, title) {
        super(author, content);
        this.title = title;
        this.comments = new Comments();
    }

    addComment(author, content) {
        this.comments.addComment(author, content);
    }

    deleteComment(postId) {
        const comments = this.comments.list;

        if (comments.length === 0) {
            throw new Error('the list is empty.');
        }
        
        const filteredComments = comments.filter(comment => comment.id !== postId);
        this.comments.list = filteredComments;
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