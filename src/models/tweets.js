import mongoose from 'mongoose';

const TweetsSchema = new mongoose.Schema(
    {
        tweet: {
            type: String,
        },
        favorite: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('Tweets', TweetsSchema)