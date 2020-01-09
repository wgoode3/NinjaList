import React from 'react';

const NinjaList = props => {
    return (
        <table className="table table-striped">
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Village</th>
                    <th>Rank</th>
                    <th>Age</th>
                </tr>
                {
                    props.ninjas.map( (ninja, i) => 
                        <tr key={i}>
                            <td>{ninja.name}</td>
                            <td>{ninja.village}</td>
                            <td>{ninja.rank}</td>
                            <td>{ninja.age}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default NinjaList;