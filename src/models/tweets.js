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
        fecha: {
            type: String,
        },
        hora: {
            type: String,
        }

    },
    {
        timestamps: true,
    }
);

export default mongoose.model('Tweets', TweetsSchema)