import { ApolloServer } from "apollo-server"
import { typeDefs, resolvers } from "./graphql/schema"
import { connect } from "./database"

connect()
const server = new ApolloServer({ typeDefs, resolvers }) 
server.listen().then(({url}) => {
    console.log(`servidor esta listo en ${url}`)
})

