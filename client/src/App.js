import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache
} from '@apollo/client';


import Header from './components/Header';
import Clients from './components/Clients';
import AddClientModal from './components/AddClientModal';

//SERVE PRA TIRAR OS WARNINGS DO CONSOLE QUANDO USA O UPDATE CACHE DA MUTATION
//SERVE PRA ESSE CASO QUE POSSUI POUCOS TIPOS, TEM QUE VER SE POSSUI UMA FORMA MELHOR DE SER FEITA
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});


const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: cache
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <div className="container">
        <AddClientModal />
        <Clients />
      </div>
    </ApolloProvider>
  );
}

export default App;
