import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'

import { Link } from 'react-router-dom'
	
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'


const Chats = () => {
    const [chats, setS] = useState([]);
    const [loading, setL] = useState(false)

    useEffect(()=>{
        setL(true);
        axios.get('http://localhost:5555/chat/chats')
        .then((response)=>{
            setS(response.data);
            console.log(response);
            setL(false)
        })
        .catch((error) => {
            console.log(error);
            setL(false);
        })
    },[])
  return (
    <div>
        {loading ? (<Spinner />): (
            <table className='w-full border-separate border-spacing-2'>
	   
	
            <thead>
                <tr>
                  <th className='border border-slate-600 rounded-md'>No</th>
                  <th className='border border-slate-600 rounded-md'>Title</th>
                  <th className='border border-slate-600 rounded-md max-md:hidden'>Vehicle</th>
                  <th className='border border-slate-600 rounded-md max-md:hidden'>issue</th>
         
                  <th className='border border-slate-600 rounded-md'>Operations</th>
                  <th className='border border-slate-600 rounded-md'><Link to={'/chat/create'}>Create</Link></th>
                </tr>
             </thead>
         
             <tbody>
             {chats.map((s, index) => (
                 <tr key={s._id} className='h-8'>
                     <td className='border border-slate-700 rounded-md text-center'>
                         {index + 1}
                     </td>
                     <td className='border border-slate-700 rounded-md text-center'>
                         {s.title}
                     </td>
                     <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                         {s.vehicle}
                     </td>
                     <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                         {s.issue}
                     </td>
                   
                     <td className='border border-slate-700 rounded-md text-center'>
                         <div className='flex justify-center gap-x-4'>
                         <Link to={`/chat/edit/${s._id}`}>
                               <AiOutlineEdit className='text-2xl text-yellow-800' />
                           </Link> 
                         <Link to={`/chat/getchat/${s._id}`}>
                                 <BsInfoCircle  className='text-2xl text-red-800 bg-sky' /> 
                             </Link>
                                <Link to={`/chat/delete/${s._id}`}>
                                 <MdOutlineDelete className='text-2xl text-red-800 bg-sky' /> 
                             </Link>
                         </div>
                     </td>
                 </tr>
                 ))}
         </tbody>
         </table>
     
        ) }
    </div>
  )
}

export default Chats