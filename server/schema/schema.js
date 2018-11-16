const graphql = require("graphql");
const _ = require("lodash");
const Gift = require("../models/Gift");
const Occasion = require("../models/Occasion");
const TargetGroup = require("../models/TargetGroup");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull
} = graphql;

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
    gifts: {
      type: new GraphQLList(GiftType),
      resolve(parent, args) {
        //return _.filter(gifts, { occasionId: parent.id });
        return Gift.find({ occasionId: parent.id });
      }
    }
  })
});

const TargetgroupType = new GraphQLObjectType({
  name: "Targetgroup",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    gifts: {
      type: new GraphQLList(GiftType),
      resolve(parent, args) {
        //return _.filter(gifts, { targetId: parent.id });
        return Gift.find({ targetId: parent.id });
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
        //return _.find(gifts, { id: args.id });
        return Gift.findById(args.id);
      }
    },
    occasion: {
      type: OccasionType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //code to get data from db
        //return _.find(occasion, { id: args.id });
        return Occasion.findById(args.id);
      }
    },
    targetgroup: {
      type: TargetgroupType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //code to get data from db
        //return _.find(targetgroup, { id: args.id });
        return TargetGroup.findById(args.id);
      }
    },
    gifts: {
      type: new GraphQLList(GiftType),
      resolve(parent, args) {
        //return gifts;
        return Gift.find({});
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addGift: {
      type: GiftType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        category: { type: new GraphQLNonNull(GraphQLString) },
        occasionId: { type: new GraphQLNonNull(GraphQLID) },
        targetId: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, args) {
        let gift = new Gift({
          name: args.name,
          category: args.category,
          occasionId: args.occasionId,
          targetId: args.targetId
        });
        return gift.save();
      }
    },

    addOccasion: {
      type: OccasionType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        let occasion = new Occasion({
          name: args.name
        });
        return occasion.save();
      }
    },

    addTargetgroup: {
      type: TargetgroupType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        let targetgroup = new TargetGroup({
          name: args.name
        });
        return targetgroup.save();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
