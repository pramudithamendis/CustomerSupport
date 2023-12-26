import React, { useState} from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'

const Create = () => {
    const [loading, setL] = useState(false);
    const CreateF = () => {
        setL(true);
        axios.post('http://localhost:5555/chat/create', {"title": "Issue with the vehicle","vehicle":"Car","issue":"I have been facing a some minor issues with my car"})
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            setL(false);
        })
    }

  return (
    <div>Create
        

    <button className='p-2 bg-sky-300 m-' onClick={CreateF}
    >Save</button>
</div>
  )
}

export default Create