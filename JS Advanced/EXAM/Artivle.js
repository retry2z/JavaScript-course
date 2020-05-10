class Article {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (!this._likes.length) {
            return `${this.title} has 0 likes`;
        }
        if (this._likes.length === 1) {
            return `${this._likes[0]} likes this article!`;
        }

        return `${this._likes[0]} and ${this._likes.length - 1} others like this article!`;
    }

    like(username) {
        if (!username) {
            return
        }

        if (this._likes.includes(username)) {
            throw new Error(`You can't like the same article twice!`);
        }

        if (username === this.creator) {
            throw new Error(`You can't like your own articles!`);
        }

        this._likes.push(username);

        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if (!username) {
            return
        }

        if (!this._likes.includes(username)) {
            throw new Error("You can't dislike this article!");
        }

        this._likes = this._likes.filter(x => x !== username);

        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        if (!username || !content) {
            return
        }

        id = id || this._comments.length + 1
        const currentComment = this._comments.find(x => x.id === id);

        if (!currentComment) {
            const comment = { id, username, content, replies: [] };
            this._comments.push(comment);

            return `${username} commented on ${this.title}`;
        } else {
            const replyId = id + '.' + (currentComment.replies.length + 1);
            const reply = { replyId, username, content };
            currentComment.replies.push(reply);

            return "You replied successfully";
        }
    }

    toString(sortingType) {
        if (!sortingType) {
            return
        }

        let output =
            `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:\n`;

        const sortOutput = (arr, type) => {
            if (type === 'asc') {
                arr = arr.sort((a, b) => a.id - b.id);
            }
            if (type === 'desc') {
                arr = arr.sort((a, b) => b.id - a.id);
            }
            if (type === 'username') {
                arr = arr.sort((a, b) => a.username.localeCompare(b.username));
            }

            return arr;
        }

        let sorted = sortOutput(this._comments, sortingType);
        sorted.forEach(x => {
            if (!x.replies.length) {
                output += `-- ${x.id}. ${x.username}: ${x.content}\n`;
            } else {
                output += `-- ${x.id}. ${x.username}: ${x.content}\n`;


                const sortReplies = sortOutput(x.replies, sortingType);
                sortReplies.forEach(reply => {
                    output += `--- ${reply.replyId}. ${reply.username}: ${reply.content}\n`
                });
            }
        });
        return output.trim();
    }
}

let art = new Article("My Article", "Anny");
console.log(art.like("John"));
console.log(art.likes);
console.log(art.dislike("John"));;
console.log(art.likes);
art.comment("Sammy", "Some Content");

console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply");
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");

console.log(art.toString('desc'));

// Corresponding output
// John likes this article!
// My Article has 0 likes
// Ammy commented on My Article
// You replied successfully
//------------------------------------------------------------
// Title: My Article
// Creator: Anny
// Likes: 0
// Comments:
// -- 2. Ammy: New Content
// -- 3. Jessy: Nice :)
// -- 1. Sammy: Some Content
// --- 1.2. SAmmy: Reply@
// --- 1.1. Zane: Reply

// Title: My Article
// Creator: Anny
// Likes: 1
// Comments:
// -- 3. Jessy: Nice :)
// -- 2. Ammy: New Content
// -- 1. Sammy: Some Content
// --- 1.2. SAmmy: Reply@
// --- 1.1. Zane: Reply
