import React, { useState } from 'react';
import './css/AddUser.css';
import './api';
import { addUser } from './api';
import { useNavigate } from 'react-router-dom'



const initialValue = {
    name:'',
    age:''
}


function AddUser() {

    const [user,setUser] = useState(initialValue);
    const { name, age }= user;
    let navigate = useNavigate()


    const onValueChange = (e)=>{
         setUser({...user, [e.target.name]: e.target.value})
         console.log( e.target.value);
    }

    const addOneUser = async ()=>{
        await addUser(user);
        console.log(user);

        navigate('../HundleUser') //On utilise cette ligne juste pour rafraichir notre page
        navigate('/')  // et ensuite revenir rapidement dans notre accueil.

    }

    console.log(user);

    return ( 
        <div>
            <div className="formulaire">
                <input type="text" name='name' placeholder='prenom et nom' onChange={(e)=>onValueChange(e)}/>
                    <br/>
                <input type="number" min="0" name='age' placeholder='age' onChange={(e)=>onValueChange(e)}/>
                    <br/>
                <button type="button" className="btn btn-outline-success" onClick={()=>addOneUser()}>enregistrer</button>
            </div>           
        </div>
     );
}

export default AddUser;