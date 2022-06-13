const { clients, projects } = require('../sampleData');
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList } = require('graphql');

//Client
const ClientType = new GraphQLObjectType({
  name: 'Client',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  })
});

//Project
const ProjectType = new GraphQLObjectType({
  name: 'Project',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    client: {
      type: ClientType,
      resolve(parent, args) {
        return clients.find(client => client.id === parent.clientId);
      }
    }
  })
});

//Queries
const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    clients: {
      type: new GraphQLList(ClientType),
      resolve(parent, args) {
        return clients;
      }
    },
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return clients.find(client => client.id === args.id);
      }
    },
    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parent, args) {
        return projects;
      }
    },
    project: {
      type: ProjectType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return projects.find(project => project.id === args.id);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
