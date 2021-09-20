const { v4 } = require('uuid');

class Text {
    constructor(user, content) {
        this.id = v4();
        this.author = user;
        this.content = content;
        this.date = new Date();
    }

    getContent() {
        return this.content;
    }

    editContent(changedContent) {
        this.content = changedContent
    }
}

module.exports = Text;