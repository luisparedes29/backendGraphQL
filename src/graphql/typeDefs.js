export const typeDefs= `#graphql

    type Tweets{
        id: ID
        user: String
        tweet: String
        favorite: Boolean
        fecha: String
        hora: String
    }

    type Query{
        tweets: [Tweets]
    }

    type Mutation{
        addTweet(user: String, tweet: String, favorite:Boolean, fecha:String, hora:String): Tweets
        updateTweet(id: ID, tweet: String): Tweets
        deleteTweet(id: ID): Tweets
        updateFavorites(id: ID, favorite:Boolean): Tweets
    }

`;