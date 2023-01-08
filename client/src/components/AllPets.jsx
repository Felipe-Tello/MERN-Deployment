import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

const placeHolder = "https://animalclinic.org/wp-content/uploads/2019/05/paw-placeholder.png";

const AllPets = () => {
    const [pets, setPets] = useState([]);

    let navigate = useNavigate();

    useEffect(() =>{
        axios.get("http://localhost:8080/api/pets")
            .then(res => setPets(res.data))
            .catch(err => {
                if(err.response.status === 401){
                    navigate("/login");
                }
            });
    }, [])

    const deletePet = idPet => {
        axios.delete("http://localhost:8080/api/pets/"+idPet)
            .then(res => {
                let nuevaLista = pets.filter(pet => pet._id !== idPet);
                setPets(nuevaLista);
            })
    }

    // const deleteAll = () => {
    //     axios.delete("http://localhost:8000/api/pets")
    //         .then(res => navigate("/"))
    // }

    return (
        <div>
            <h1>Pets</h1>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <Link to="/new" className="btn btn-primary">New Pet</Link>
                {/* <button className="btn btn-danger" onClick={deleteAll()}>Delete All</button> */}
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>color</th>
                        <th>image</th>
                        <th>age</th>
                        <th>gender</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pets.map((pet, index) => (
                            <tr key={index}>
                                <td>{pet.name}</td>
                                <td>{pet.color}</td>
                                {pet.image ? <td><img className="img-fluid" height={300} width={300} src={pet.image}/></td>: <td><img className="img-fluid" height={300} width={300} src={placeHolder}/></td>}
                                <td>{pet.age}</td>
                                <th>{pet.gender}</th>
                                <td>
                                    <Link to={`/pets/view/${pet._id}`} className="btn btn-success">View</Link>
                                    <Link to={`/pets/edit/${pet._id}`} className="btn btn-warning">Edit</Link>
                                    <button className="btn btn-danger" onClick={() => deletePet(pet._id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )

}

export default AllPets;