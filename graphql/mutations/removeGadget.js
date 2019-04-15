const { GraphQLString } = require ('graphql');
const gadgetGraphQLType =  require('../gadgetType');
const Gadget = require('../../models/gadget');

module.exports = {
  type: gadgetGraphQLType,
  args: {
    id: { type: GraphQLString },
  },
  resolve(parent, args){
    Gadget.findByIdAndDelete(args.id)
    .then(gadget => gadget.remove())
    .then(removedGadget => removedGadget)
    .catch(err => console.log(err))
  }
}