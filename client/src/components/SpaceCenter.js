import React from 'react'
import { useQuery, gql } from '@apollo/client';

const SPACE_CENTER_QUERY=gql`
query SpaceCenter($id: Int!){
    spaceCenter(id: $id){
        id
        uid
        name
        description
        latitude
        longitude
    }
    }`;
function SpaceCenter(props) {
    let { id }=props.match.params;
    id=parseInt(id)

    const { loading, error, data }=useQuery(SPACE_CENTER_QUERY, {
        variables: { id },
    });
    console.log(data)



    if (loading) return <p>Loading...</p>;
    if (error) return `Error! ${error}`;
    console.log(data)
    return (
        <div>
            <h1>{data.spaceCenter.name}</h1>
            <p>{data.spaceCenter.description}</p>
        </div>
    )
}

export default SpaceCenter
