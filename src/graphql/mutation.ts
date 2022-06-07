import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from 'graphql'

import { UserType, TokenType } from './type'
import { signup, login } from './resolver/user-resolver'

export const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        username: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: signup,
    },
    login: {
      type: TokenType,
      args: {
        username: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: login,
    },
  },
})
