import React, { useState } from 'react';

const NinjaForm = props => {
    const [state, setState] = useState({
        name: "",
        rank: "",
        village: "",
        age: ""
    });
    const createNinja = e => {
        e.preventDefault();
        props.addNinja(state);
        setState({
            name: "",
            village: "",
            rank: "",
            age: ""
        });
    }
    const changeName = e => {
        setState({...state, name: e.target.value});
    }
    const changeRank = e => {
        setState({...state, rank: e.target.value});
    }
    const changeVillage = e => {
        setState({...state, village: e.target.value});
    }
    const changeAge = e => {
        setState({...state, age: e.target.value});
    }
    return (
        <>
            <form onSubmit={createNinja}>
                <div className="form-group">
                    <label>Name:</label>
                    <input 
                        type="text"
                        className="form-control"
                        onChange={changeName}
                        value={state.name}
                    />
                </div>
                <div className="form-group">
                    <label>Rank:</label>
                    <input 
                        type="text"
                        className="form-control"
                        onChange={changeRank}
                        value={state.rank}
                    />
                </div>
                <div className="form-group">
                    <label>Village:</label>
                    <input 
                        type="text"
                        className="form-control"
                        onChange={changeVillage}
                        value={state.village}
                    />
                </div>
                <div className="form-group">
                    <label>Age:</label>
                    <input 
                        type="number"
                        className="form-control"
                        onChange={changeAge}
                        value={state.age}
                    />
                </div>
                <input type="submit" className="btn btn-outline btn-outline-danger " />
            </form>
        </>
    );
}

export default NinjaForm;