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
    <div className='AChat_parent'>
      <div className='AChat_parent_leftpanel phonescreen'>Side</div>
      <div className='AChat_parent_middlepanel'>
        <div className='AChat_parent_middlepanel_title'>Title: {s.title}</div>
        <div className='AChat_parent_middlepanel_vehicle'>Vehicle type: {s.vehicle}</div>
        <div className='AChat_parent_middlepanel_issue'>Issue: {s.issue}</div>
      </div>
      {/* <div className='rightpanel phonescreen'>Side</div> */}
    </div>
    

  )
}

export default AChat