import { gql } from "apollo-server";
import  User  from "../../models/user"

export const typeDefs = gql`
    type User{
        id: ID
        firstName: String!
        lastName: String!
        birth_year: String!
        gender: String!
    }
    input UserInput {
        firstName: String!
        lastName: String!
        birth_year: String!
        gender: String!
    }
    type Query {
        users: [User]!
    }
    type Mutation {
        createUser(input: UserInput): User
        deleteUser(id: ID): User
        updateUser(id: ID, input: UserInput): User
    }
`
export const resolvers = {
    Query: {
        users: async () => {
            return await User.find()
        },
    },
    Mutation: {
        createUser: async (root, { input }) => {
            const newUser = new User (input)
            await newUser.save()
            return newUser
        },
        deleteUser: async (root, { id }) =>  User.findByIdAndDelete(id),
        updateUser: async (root, { id , input }) => User.findByIdAndUpdate(id, input, { new: true }),
    }
}