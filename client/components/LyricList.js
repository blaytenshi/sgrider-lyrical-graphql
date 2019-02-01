import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class LyricList extends Component {

    onLike = (id, likes) => { // passed in number of likes from render lyrics
        console.log(id);

        this.props.mutate({
            variables: {
                id: id
            },
            optimisticResponse: {
                __type: 'Mutation', // must specifically say we're making a mutation
                likeLyric: { // this should match the response data we're getting back from the mutation function in terms of structure
                    id: id,
                    __typename: 'LyricType',
                    likes: likes + 1
                }
            }
        })
    };

    renderLyrics = () => {
        return this.props.lyrics.map(({ id, content, likes }) => {
            return (
                <li key={id} className="collection-item">
                    {content}
                    <div className={"vote-box"}>
                        <i
                            className="material-icons"
                            onClick={() => this.onLike(id, likes)}
                        >
                            thumb_up
                        </i>
                        {likes}
                    </div>
                </li>
            )
        })
    };

    render() {
        return(
            <ul className="collection">
                {this.renderLyrics()}
            </ul>
        )
    }
}

const mutation = gql`
    mutation LikeLyric($id: ID) {
        likeLyric(id: $id) {
            id
            likes
        }
    }
`;

export default graphql(mutation)(LyricList);
