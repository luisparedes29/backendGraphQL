import tweets from "../models/tweets.js"
import mongoose from "mongoose"

export const resolvers ={
    Query: {
        tweets: async () => await tweets.find()
    },
    Mutation:{
        addTweet: async (_, {user,tweet,favorite}) =>{
            const newTweet = new tweets({user,tweet,favorite})
            await newTweet.save()
            return newTweet
        }
    }
}