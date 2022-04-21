import { gql } from "apollo-server";
import  Character  from "../../models/character"

import axios from "axios"

export const typeDefs = gql`
    type Character {
        id: ID
        name: String!
        height: String!
        mass: String!
        hair_color: String!
        skin_color: String!
        eye_color: String!
        birth_year: String!
        gender: String!
    }
    input CharacterInput {
        name: String!
        height: String!
        mass: String!
        hair_color: String!
        skin_color: String!
        eye_color: String!
        birth_year: String!
        gender: String!
    }
    type Query {
        characters: [Character]!
        personajes: [Character]!
    }
    type Mutation {
        createCharacter(input: CharacterInput): Character
        deleteCharacter(id: ID): Character
        updateCharacter(id: ID, input:CharacterInput): Character
    }
`

export const resolvers = {
    Query: {
        characters: async () => {
            const { data: apiRestPeopleSW } = await axios.get('https://swapi.dev/api/people/')
            return apiRestPeopleSW.results
        },
        personajes: async () => {
            return Character.find()
        }
    },
    Mutation: {
        createCharacter:  async (root, { input }) => {
            const newCharacter = new Character (input)
            await newCharacter.save()
            return newCharacter
        },
        deleteCharacter: async (root, { id }) => Character.findByIdAndDelete(id),
        updateCharacter: async (root, { id , input }) => User.findByIdAndUpdate(id, input, { new: true })
    }
}