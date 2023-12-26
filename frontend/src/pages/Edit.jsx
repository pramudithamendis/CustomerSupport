import React, { useState, useEffect } from 'react'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
    const [title, setTitle] = useState('');
    const [vehicle, setV] = useState('VAn');
const [issue, setI] = useState('Good');
    const [loading, setL] = useState(false)
    const [s, setS] = useState({});
    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(()=>{
        setL(true);
        axios.get(`http://localhost:5555/chat/getchat/${id}`)
        .then((response)=>{
            console.log(response);
            setL(false);
            setTitle(response.data.title);
            setV(response.data.vehicle);
        setI(response.data.issue);
        })
        .catch((error) => {
            console.log(error);
            setL(false);
        })
    }, [])

    const EditF = () => {
        const data = {
            title,
            vehicle,
            issue
          };
        setL(true);
        axios.put(`http://localhost:5555/chat/edit/${id}`,data )
        .then((response)=>{
            console.log(response);
            navigate('/chat/chats');
        })
        .catch((error)=>{
            setL(false);
        })
    }

  return (
    <div>Edit

<div >
         
          <input 
            type='text'
            value={title} 
            onChange={(e)=> {setTitle(e.target.value);}}
          />
        </div>

    <button className='p-2 bg-sky-300 m-' onClick={EditF}
    >Edit it!</button>
</div>
  )
}

export default Edit