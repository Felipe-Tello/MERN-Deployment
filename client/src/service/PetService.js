import axios from 'axios';

const PET_API_BASE_URL = "http://localhost:8080/api/pets";

const getAllPets = () =>{
    return axios.get(PET_API_BASE_URL);
};
const getPetById = (id) =>{
    return axios.get(PET_API_BASE_URL + '/' + id);
};
const createPet = (data) =>{
    return axios.post(PET_API_BASE_URL, data);
};
const updatePet = (data, id) =>{
    return axios.put(PET_API_BASE_URL + '/' + id, data);
};
const deletePet = (id) =>{
    return axios.delete(PET_API_BASE_URL + '/' + id);
};

const Petservice = {
    getAllPets,
    getPetById,
    createPet,
    updatePet,
    deletePet
};

export default Petservice;