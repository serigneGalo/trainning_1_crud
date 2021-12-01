import React, { useEffect, useState } from 'react';
import { useNavigate , useParams } from 'react-router';
import { editUser, getOneUser } from './api';
import './css/Edit.css'

//On va utiliser cette variable pour y stocker les données.
const initialValue={
    name:'',
    age:''
}

function Edit() {

    const [user,setUser]= useState(initialValue)
    const { name, age }= user

//Cette variable est pour recuperrer le "id" dans l'url
    const {id} = useParams()
    
    let navigate = useNavigate()

    useEffect(()=>{
        loadUser();
    },[]);

//Cette fonction "loadUser" permet de charger les infos du user a modifié dans les champs.
    const loadUser = async ()=>{
        const response = await getOneUser(id);
        setUser(response.data);
    }

    const editUserDetail = async ()=>{
        navigate('../../')
        await editUser(id,user)
    }

// Cette fonction nous permet de sauvegarder les données entrées par le user
// pendant la modification dans notre var user.
    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    const backHome = ()=>{
        navigate('/')
    }

    return ( 
        <div>
            <div className="formulaire">
                <input type="text" name='name' placeholder='prenom et nom' value={name} onChange={(e) => onValueChange(e)}/>
                    <br/>
                <input type="number" min="0" name='age' placeholder='age' value={age} onChange={(e) => onValueChange(e)}/>
                    <br/>
                <button type="button" className="btn btn-outline-success" onClick={() => editUserDetail()}>modifier</button>
            </div>
            <br/>
            <button type="button" className="btn btn-outline-danger home" onClick={()=>backHome()}>HOME</button>
        </div>
     );
}

export default Edit;