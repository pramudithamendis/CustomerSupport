import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'

import { Link } from 'react-router-dom'

import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'
import './Chats.css'


const Chats = () => {
    const [chats, setS] = useState([]);
    const [loading, setL] = useState(false)

    useEffect(() => {
        setL(true);
        axios.get('http://localhost:5555/chat/chats')
            .then((response) => {
                setS(response.data);
                console.log(response);
                setL(false)
            })
            .catch((error) => {
                console.log(error);
                setL(false);
            })
    }, [])
    return (
        <div>
            {loading ? (<Spinner />) : (

                
                <div className='Chats_parent'>
                    <Link className='edit' to={`/chat/create`}>
                    <div className='leftpanel phonescreen'>
                        <div>
                            <AiOutlineEdit className='' />

                        </div>
                        <div>Create</div>
                    </div>
                </Link>
                
                    {chats.map((s, index) => (
                    <div className='middlepanel' key={s._id}>
                        <>
                            <div className='title'>Title: {s.title}</div>
                            <div className='vehicle'>Vehicle type: {s.vehicle}</div>

                            <div className='Operations'>
                                <Link className='edit' to={`/chat/edit/${s._id}`}>
                                    <AiOutlineEdit className='' />
                                </Link>
                                <Link className='info' to={`/chat/getchat/${s._id}`}>
                                    <BsInfoCircle className='' />
                                </Link>
                                <Link className='delete' to={`/chat/delete/${s._id}`}>
                                    <MdOutlineDelete className='' />
                                </Link>

                            </div>
                        </>
                    </div>
                ))}
            {/* <div className='rightpanel phonescreen'>Side</div> */}
        </div>



        //     <table >



        //         <tr>
        //           <th className='thead'>No</th>
        //           <th className='thead'>Title</th>
        //           <th className='thead'>Vehicle</th>
        //           <th className='thead'>issue</th>

        //           <th className=''>Operations</th>
        //           <th className=''><Link to={'/chat/create'}>Create</Link></th>
        //         </tr>




        //     <div className="tbody">
        //      <tbody>
        //      {chats.map((s, index) => (
        //          <tr key={s._id} className='h-8'>
        //              <td className=''>
        //                  {index + 1}
        //              </td>
        //              <td className=''>
        //                  {s.title}
        //              </td>
        //              <td className=''>
        //                  {s.vehicle}
        //              </td>
        //              <td className=''>
        //                  {s.issue}
        //              </td>

        //              <td className=''>
        //                  <div className=''>
        //                  <Link to={`/chat/edit/${s._id}`}>
        //                        <AiOutlineEdit className='' />
        //                    </Link> 
        //                  <Link to={`/chat/getchat/${s._id}`}>
        //                          <BsInfoCircle  className='' /> 
        //                      </Link>
        //                         <Link to={`/chat/delete/${s._id}`}>
        //                          <MdOutlineDelete className='' /> 
        //                      </Link>
        //                  </div>
        //              </td>
        //          </tr>
        //          ))}
        //  </tbody>
        //  </div>
        //  </table>

    )
}
        </div >
    )
}

export default Chats