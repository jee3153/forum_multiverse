const Forums = require('./Forums');

class Page{
    constructor(pageTitle) {
        this.pageTitle = pageTitle;
        this.forums = new Forums();
    }

    viewForums() {
        this.forums.list.forEach(forum => {
            console.log(forum.forumName)
        })
    }
}