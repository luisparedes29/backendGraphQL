import tweets from "../models/tweets.js"

export const resolvers ={
    Query: {
        tweets: async () => await tweets.find(),
        favoritos: async () => await tweets.find({ favorite: true })
    },
    Mutation:{
        addTweet: async (_, {user,tweet,favorite,fecha,hora}) =>{
            const newTweet = new tweets({user,tweet,favorite,fecha,hora})
            await newTweet.save()
            return newTweet
        },
        updateTweet: async (_, {id, tweet}) => {
            const updateTweet = await tweets.findByIdAndUpdate(id, { tweet }, { new: true });
            return updateTweet
        },
        deleteTweet: async (_, {id}) => {
            const deleteTweet = await tweets.findByIdAndDelete(id);
            return deleteTweet
        },
        updateFavorites: async(_, {id, favorite}) => {
            const updateFavorites = await tweets.findByIdAndUpdate(id, { favorite }, { new: true })
            return updateFavorites
        }
    }
}