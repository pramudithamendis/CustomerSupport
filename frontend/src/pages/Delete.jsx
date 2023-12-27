import React, { useState } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { useNavigate, useParams } from 'react-router-dom'
import './Delete.css'
const Delete = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const DeleteF = () => {
    setLoading(true);
    axios.delete(`http://localhost:5555/chat/delete/${id}`)
      .then(() => {
        setLoading(false);
        navigate('/chat/chats');
      })
      .catch((error) => {
        setLoading(false);

        console.log(error);
      })
  }
  return (
    <div className='Delete_parent'>
      <div className="Delete_parent_leftpanel">Side</div>
      <div className="Delete_parent_middlepanel">
        Are you sure you want to delete this?
        <button className='Delete_parent_middlepanel_button' onClick={DeleteF}
        >Delete</button>
      </div>



    </div>
  )
}

export default Delete