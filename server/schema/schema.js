const graphql = require("graphql");
const _ = require("lodash");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList
} = graphql;

//dummy data
let gifts = [
  { name: "bag", category: "Fashion", id: "1", occasionId: "3", targetId: "3" },
  { name: "cake", category: "Food", id: "2", occasionId: "2", targetId: "1" },
  {
    name: "ring",
    category: "Jwelary",
    id: "3",
    occasionId: "1",
    targetId: "2"
  },
  { name: "car", category: "Fashion", id: "1", occasionId: "3", targetId: "3" },
  { name: "rose", category: "Food", id: "2", occasionId: "2", targetId: "2" },
  {
    name: "makeup-kit",
    category: "Jwelary",
    id: "3",
    occasionId: "1",
    targetId: "2"
  }
];

let occasion = [
  { name: "weeding", id: "1" },
  { name: "birthday", id: "2" },
  { name: "christmas", id: "3" }
];
let targetgroup = [
  { name: "kids", id: "1" },
  { name: "girls", id: "2" },
  { name: "boys", id: "3" }
];

const GiftType = new GraphQLObjectType({
  name: "Gift",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    category: { type: GraphQLString }
  })
});

const OccasionType = new GraphQLObjectType({
  name: "Occasion",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    gift: {
      type: new GraphQLList(GiftType),
      resolve(parent, args) {
        return _.filter(gifts, { occasionId: parent.id });
      }
    }
  })
});

const TargetgroupType = new GraphQLObjectType({
  name: "Targetgroup",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    gift: {
      type: new GraphQLList(GiftType),
      resolve(parent, args) {
        return _.filter(gifts, { targetId: parent.id });
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    gift: {
      type: GiftType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //code to get data from db
        return _.find(gifts, { id: args.id });
      }
    },
    occasion: {
      type: OccasionType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //code to get data from db
        return _.find(occasion, { id: args.id });
      }
    },
    targetgroup: {
      type: TargetgroupType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //code to get data from db
        return _.find(targetgroup, { id: args.id });
      }
    },
    gifts: {
      type: new GraphQLList(GiftType),
      resolve(parent, args) {
        return gifts;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
