const Post = require('./Post');
const Comment = require('./Comment');
const User = require('./User')
const { v4 } = require('uuid');

test('post sets author correctly', () => {
    const post = new Post('Lauren', 'some content', 'some title');
    expect(post.author).toBe('Lauren');
})

test('post sets content correctly', () => {
    const p = new Post('Lauren', 'some content', 'some title');
    expect(p.content).toBe('some content');
})

test('post sets title correctly', () => {
    const p = new Post('Lauren', 'some content', 'some title');
    expect(p.title).toBe('some title');
})

test('comment is properly added to comments list', () => {
    const user = new User('Adam')
    const p = new Post(user, 'some content', 'some title');
    const commenter = new User('Lauren');
    p.addComment(commenter, 'some claim');

    expect(p.comments.list[0].author.username).toBe('Lauren');
    expect(p.comments.list[0].content).toBe('some claim');
});

test('comment is deleted properly', () => {
    const id = v4();
    const lauren = new User('Lauren');
    const emily = new User('Emily')
    const p = new Post(lauren, 'some content', 'some title');
    const c = new Comment(emily, 'cmm', 'forumName');
    p.comments.list = [c];
    p.deleteComment(c, emily);
    expect(p.comments.list).toHaveLength(0);
     
});

test('throw an error when comment deletion attempted in empty list', () => {
    const id = v4();
    const user = new User('Lauren');
    user.id = id;
    const p = new Post(user, 'some content', 'some title');
    
    // p.addComment(user, 'FYI...');
    const expectedError = new Error('the list is empty.')
    expect(() => p.deleteComment(id)).toThrow(expectedError);
   
});
