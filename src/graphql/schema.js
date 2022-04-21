import { typeDefs as user, resolvers as userResolvers } from "./typeDefs/user"
import { typeDefs as character, resolvers as characterResolvers} from "./typeDefs/character"

export const typeDefs = [user, character]
export const resolvers = [userResolvers, characterResolvers]