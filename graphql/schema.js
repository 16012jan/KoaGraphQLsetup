const { GraphQLSchema, GraphQLObjectType, GraphQLString} = require('graphql');
const gadgetGraphQLType =  require('./gadgetType');
const Gadget = require('../models/gadget');
const Mutations = require('./mutations');
const RootQuery = require('./queries/rootQuery')

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations,
});

// Query
// {
//   gadget(id:"5cb0ae8c8fe43ab9b6f5d5cb") {
//     name
//   }
// }