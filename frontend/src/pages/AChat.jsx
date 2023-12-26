import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import './AChat.css'

const AChat = () => {
  
    const [loading, setL] = useState(false)
    const [s, setS] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        setL(true);
        axios.get(`http://localhost:5555/chat/getchat/${id}`)
        .then((response)=>{
            console.log(response);
            setS(response.data);
            setL(false)
        })
        .catch((error) => {
            console.log(error);
            setL(false);
        })
    }, [])
  return (
    // <div className='AChat_parent'>
    //   <div className='leftpanel'>Side</div>
    //   <div className='rightpanel'>Content</div>

    // </div>
    <div>{s.title}</div>

  )
}

export default AChat