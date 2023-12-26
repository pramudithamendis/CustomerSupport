import React, { useState} from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { useNavigate, useParams } from 'react-router-dom'

const Delete = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } =useParams();

    const DeleteF = () => {
        setLoading(true);
        axios.delete(`http://localhost:5555/chat/delete/${id}`)
        .then(()=>{
            setLoading(false);
            navigate('/chat/chats');
          })
        .catch((error)=>{
            setLoading(false);
            
            console.log(error);
          })
    }
  return (
<div>Delete
        

        <button className='p-2 bg-sky-300 m-' onClick={DeleteF}
        >Delete</button>
    </div>
  )
}

export default Delete