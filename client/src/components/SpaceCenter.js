import { useQuery, gql } from '@apollo/client';
import SpaceCenterListIem from './SpaceCenterListItem'
import SpaceCenterList from './SpaceCenterList'
import Heading from './Heading';
import Typo from './Typo'

//Feth space center's flight
const SPACE_CENTER_QUERY=gql`
query SpaceCenter($id: Int!){
    spaceCenter(id: $id){
        id
        name
        flight{
        code
        }
    }
    }`;
function SpaceCenter(props) {
    let { id }=props.match.params;
    id=parseInt(id)

    const { loading, error, data }=useQuery(SPACE_CENTER_QUERY, {
        variables: { id },
    });
    //handle loading
    if (loading) return <p>Loading...</p>;
    //handle possible error
    if (error) return `Error! ${error}`;
    console.log(data.spaceCenter.flight.code)
    return (
        <div>
            <Heading>{data.spaceCenter.name}</Heading>
            <Typo>Flights</Typo>
            <SpaceCenterList>
                <SpaceCenterListIem>{data.spaceCenter.flight.code}</SpaceCenterListIem>
            </SpaceCenterList>
            <Typo>{data.spaceCenter.flight.departure_at}</Typo>
        </div>
    )
}

export default SpaceCenter
