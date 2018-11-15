const graphql = require("graphql");
const _ = require("lodash");

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

//dummy data
let gifts = [
  { name: "bag", category: "Fashion", id: "1" },
  { name: "cake", category: "Food", id: "1" },
  { name: "ring", category: "Jwelary", id: "1" }
];
const GiftType = new GraphQLObjectType({
  name: "Gift",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    category: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    gift: {
      type: GiftType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        //code to get data from db
        return _.find(gifts, { id: args.id });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
