import mongoose from 'mongoose';

const TweetsSchema = new mongoose.Schema(
    {
        user:{
            type: String
        },
        tweet: {
            type: String,
        },
        favorite: {
            type: Boolean,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('Tweets', TweetsSchema)