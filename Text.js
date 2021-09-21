const { v4 } = require('uuid');
const Users = require('./Users');

class Text {
    constructor(user, content) {
        this.id = v4();
        this.author = user;
        this.content = content;
        this.date = new Date();
        this.downvotes = [];
        this.upvotes = [];
    }

    getContent() {
        return this.content;
    }

    editContent(changedContent) {
        this.content = changedContent
    }

    voted(user) {
        const userDisliked = this.downvotes.list.some(uerId => uerId === user.id);
        const userLiked = this.upvotes.list.some(uerId => uerId === user.id);
        return userDisliked || userLiked;
    }

    like(user) {
        if (this.voted(user)) {
            throw new Error('you have already voted for this.')
        }
        this.upvotes.push(user.id);
    }

    dislike(user) {
        if (this.voted(user)) {
            throw new Error('you have already voted for this.')
        }
        this.downvotes.push(user.id);
    }

    numOfLikes() {
        return this.upvotes.length;
    }

    numOfDislikes() {
        return this.downvotes.length;
    }
}

module.exports = Text;