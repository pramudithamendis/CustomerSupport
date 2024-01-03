import React from 'react'
import { Link } from 'react-router-dom'

const BackButton = () => {
  return (
    <div>
        <Link to={`/chat/chats`}>
                              Home
                                </Link>
    </div>
  )
}

export default BackButton