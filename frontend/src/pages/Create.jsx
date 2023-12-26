import React, { useState} from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const [title, setTitle] = useState('');
  const [vehicle, setV] = useState('VAn');
  const [issue, setI] = useState('Good');

    const [loading, setL] = useState(false);
    const navigate = useNavigate();

    const CreateF = () => {
      const data = {
        title,
        vehicle,
        issue
      };
        setL(true);
        axios.post('http://localhost:5555/chat/create', data)
        .then((response)=>{
            console.log(response);
            navigate('/chat/chats');
        })
        .catch((error)=>{
            setL(false);
        })
    }

  return (
    <div>Create

        <div >
         
          <input 
            type='text'
            value={title} 
            onChange={(e)=> {setTitle(e.target.value);}
          }
          />
        </div>

    <button className='p-2 bg-sky-300 m-' onClick={CreateF}
    >Save</button>
</div>
  )
}

export default Create