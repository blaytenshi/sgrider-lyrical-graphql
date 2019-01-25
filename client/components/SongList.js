import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component {
    render() {
        console.log(this.props);

        return(
            <div>Song List</div>
        )
    }
}

const query = gql`
    {
      songs{
        title
      }
    }
`;

export default graphql(query)(SongList);