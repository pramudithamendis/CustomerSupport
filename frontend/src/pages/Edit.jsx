import React, { useState, useEffect } from 'react'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
    const [loading, setL] = useState(false)
    const [s, setS] = useState({});
    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(()=>{
        setL(true);
        axios.get(`http://localhost:5555/chat/getchat/${id}`)
        .then((response)=>{
            console.log(response);
            setL(false)
        })
        .catch((error) => {
            console.log(error);
            setL(false);
        })
    }, [])

    const EditF = () => {
        setL(true);
        axios.put(`http://localhost:5555/chat/edit/${id}`, {"title": "BIssue with the vehicle","vehicle":"Car","issue":"I have been facing a some minor issues with my car"})
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
    <button className='p-2 bg-sky-300 m-' onClick={EditF}
    >Edit it!</button>
</div>
  )
}

export default Edit