import React from 'react'; 
import './App.css';
import Graph from './Graph/Graph';
import ApolloClient from 'apollo-boost'; //For creating client below
import {ApolloProvider} from 'react-apollo'; // used for gluing react and apollo
import SearchBar from './Search/Search';

//client setup
const client = new ApolloClient({
  uri: 'https://api.graphql.jobs/' // Here is the API's endpoint
})


const app = props => { 
  
   return (
     <ApolloProvider client={client}>
      <div className="App">
        <h1 className="heading">Welcome to Job Hunt</h1>
        <SearchBar handleChange={(e)=> console.log(e.target.value)} />
        <Graph/> 
      </div>
      </ApolloProvider>
    );
  
  
}

export default app;

