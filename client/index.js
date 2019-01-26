import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import {BrowserRouter, Route} from 'react-router-dom';

import App from './components/App';
import SongList from './components/SongList';

const client = new ApolloClient({});

const Root = () => {
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <div>
                    <Route component={SongList} path={'/songs'}/>
                    <Route component={App} exact path={'/'}/>
                </div>
            </BrowserRouter>
        </ApolloProvider>
    )
};

ReactDOM.render(
    <Root/>,
    document.querySelector('#root')
);
