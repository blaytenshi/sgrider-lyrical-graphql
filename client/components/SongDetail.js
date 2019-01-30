import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import fetchSong from '../queries/fetchSong';
import LyricCreate from './LyricCreate';

class SongDetail extends Component {
    render() {

        const { song } = this.props.data;
        if ( !song ) {
            // can show a spinner here
            return <div>Loading...</div>
        } else {
            return (
                <div>
                    <button type='button' onClick={() => this.props.history.push('/')}>Back</button>
                    <h3>{song.title}</h3>
                    <LyricCreate songId={this.props.match.params.id} />
                </div>
            )
        }
    }
}

export default graphql(fetchSong, {
    options: (props) => { // the query option. the graphql HOC has the router props
        return {
            variables: {
                id: props.match.params.id // comes from router props
            }
        }
    }
})(SongDetail);
