import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import fetchSongs from '../queries/fetchSongs';

class SongCreate extends Component {
    constructor(props) {
        super(props);

        this.state = { title: '' }
    }

    onSubmit = (event) => {
        event.preventDefault();

        // mutate() comes from graphql HOC. The function returns a promise!!
        this.props.mutate({
            variables: {
                title: this.state.title
            },
            refetchQueries: [{
                query: fetchSongs,
                // also takes vaiables like in the above
            }]
        }).then(() => {
            this.props.history.push('/songs');
        }).catch((error) => {
            console.log("SOMETHING WENT WRONG!", error)
        });
    };

    render() {
        return (
            <div>
                <button type={'button'} onClick={() => this.props.history.push('/songs')}>Back</button>
                <h3>Create a New Song</h3>
                <form onSubmit={this.onSubmit}>
                    <label>Song Title:</label>
                    <input value={this.state.title} onChange={event => this.setState({title: event.target.value })} />
                </form>
            </div>
        )
    }
}

const mutation = gql`
    mutation AddSong($title: String){
        addSong(title: $title) {
            id
            title
        }
    }
`;

export default graphql(mutation)(SongCreate)