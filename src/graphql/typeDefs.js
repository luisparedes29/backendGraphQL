export const typeDefs= `#graphql

    type Tweets{
        id: ID
        user: String
        tweet: String
        favorite: Boolean
        createdAt: String
        updatedAt: String
    }

    type Query{
        tweets: [Tweets]
    }

    type Mutation{
        addTweet(user: String, tweet: String, favorite:Boolean): Tweets
    }

`;