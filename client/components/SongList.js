import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import fetchSongs from '../queries/fetchSongs';
import deleteSong from '../queries/deleteSong';

class SongList extends Component {
    renderSongs() {
        return this.props.data.songs.map(({ id, title }) => {

            return (
                <li className="collection-item" key={id}>
                    {title}
                    <i
                        className={"material-icons"}
                        onClick={() => this.onSongDelete(id)}
                    >delete</i>
                </li>
            )
        })
    }

    onSongDelete = (id) => {
        this.props.mutate({
            variables: {
                id: id
            }
        }).then(() => this.props.data.refetch())
    };

    render() {
        if (this.props.data.loading) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <ul className="collection">
                    {this.renderSongs()}
                </ul>
                <button
                    type={'button'}
                    onClick={() => {this.props.history.push('/songs/new/')}}
                    className="btn-floating btn-large red right">
                    <i className="material-icons">add</i>
                </button>
            </div>
        )
    }
}

export default graphql(deleteSong)( // this has to be like this because the graphql HOC is not designed to handle multiple queries and mutations. Maybe we can use recompose?
    graphql(fetchSongs)(SongList)
);