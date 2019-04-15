const { GraphQLObjectType } =  require('graphql');
const queryGadgetById = require('../queries/queryGadgetById');
const queryAllGadgets = require('../queries/queryAllGadgets');


const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    queryGadgetById,
    queryAllGadgets,
  }
})

module.exports = RootQuery;
