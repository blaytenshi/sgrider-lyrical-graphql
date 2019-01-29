import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from './components/App';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';

const client = new ApolloClient({});

const Root = () => {
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Switch>
                    <Route component={SongCreate} exact path={'/songs/new'}/>
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
