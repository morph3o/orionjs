import {GraphQLObjectType} from 'graphql'
import getResolvers from './getResolvers'

export default async function({controllers}) {
  const fields = await getResolvers({controllers, mutation: true})
  return new GraphQLObjectType({
    name: 'Mutation',
    fields
  })
}