const moongose = require('moongose');

const TweetSchema = new moongose.Schema({
    author: String,
    content: String,
    likes: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = moongose.model("Tweet", TweetSchema);