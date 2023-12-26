import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Create from './pages/Create.jsx'
import Chats from './pages/Chats.jsx'
import Delete from './pages/Delete.jsx'
import AChat from './pages/AChat.jsx'
import Edit from './pages/Edit.jsx'

const App = () => {
  return (
    <Routes>
      <Route path='/chat/create' element={<Create />} />
      <Route path='/chat/chats' element={<Chats />} />
      <Route path='/chat/delete/:id' element={<Delete />} />
      <Route path='/chat/getchat/:id' element={<AChat />} />
      <Route path='/chat/edit/:id' element={<Edit />} />
    </Routes>
  )
}

export default App