import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './style/style.css';

import App from './components/App';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';

const cache = new InMemoryCache({ // you can't just supply the dataIdFromObject config directly to the ApolloClient anymore. Needs this InMemoryCache object.
    dataIdFromObject: o => o.id
});

const client = new ApolloClient({
    // tells Apollo to go and fetch every piece of data you need,
    // look at every single piece of data, every single record and use the id field from that record to identify that piece of data
    cache
});

const Root = () => {
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Switch>
                    <Route component={SongCreate} exact path={'/songs/new'}/>
                    <Route component={SongDetail} path={'/songs/:id'} />
                    <Route component={SongList} path={'/songs'}/>
                    <Route component={App} exact path={'/'}/>
                </Switch>
            </BrowserRouter>
        </ApolloProvider>
    )
};

ReactDOM.render(
    <Root/>,
    document.querySelector('#root')
);
