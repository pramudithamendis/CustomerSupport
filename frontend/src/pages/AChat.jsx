import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';

const AChat = () => {
    const [loading, setL] = useState(false)
    const [s, setS] = useState({});
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
  return (
    <div>AChat</div>
  )
}

export default AChat