import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import fetchSongs from '../queries/fetchSongs';

class SongList extends Component {
    renderSongs() {
        return this.props.data.songs.map(song => {
            return (
                <li className="collection-item" key={song.id}>{song.title}</li>
            )
        })
    }

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

export default graphql(fetchSongs)(SongList);