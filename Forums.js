const Forum = require('./Forum');
const User = require('./User');

class Forums {
    constructor() {
        this.list = []
    }
    
    addForum(name) {
        if (this.list.filter(f => f.name !== name)) {
            this.list.push(new Forum(name));
        } else {
            throw new Error('the forum already exsits, pick other name')
        }
    }
}
// const fs = new Forums();
// const user = new User('Lol');
// fs.addForum('gardening');
// console.log(fs.list);
module.exports = Forums;