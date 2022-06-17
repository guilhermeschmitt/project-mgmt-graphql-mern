import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache
} from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';

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
      <Router>
        <Header />
        <div className="main-container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/projects/:id' element={<Project />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
