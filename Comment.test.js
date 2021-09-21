const Comment = require('./Comment');
const User = require('./User');


test('comment created properly', () => {
    const jen = new User('Jennifer')
    const c = new Comment(jen, 'content','JS conf');
   
    expect(c.author.username).toBe('Jennifer');
    expect(c.content).toBe('content');
});jen

test('comment edited correctly', () => {
    const jen = new User('Jennifer')
    const c = new Comment(jen, 'content', 'forum');
    const commentToChage = 'edited comment'
    c.editContent(commentToChage);
    console.log(c.content);
    expect(c.content).toBe('edited comment');
});


test('user is added in upvote list', () => {
    const susie = new User('Susie');
    const chan = new User('Chan');
    const cmm = new Comment(susie, 'some content','forum');
    
    cmm.like(chan);
    expect(cmm.upvotes.list[0]).toBe(chan.id);
})