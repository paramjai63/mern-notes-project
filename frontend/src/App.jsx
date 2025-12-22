import React from 'react'
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage.jsx'
import CreatePage from './pages/CreatePage.jsx'
import NoteDetailPage from './pages/NoteDetailPage.jsx';
import toast from 'react-hot-toast'; // we are using the react-hot-toast to get the success, error etc buttons prebuilt by using just toast.success("something") inside onclick property within a button you can visit the site  and see about it

const App = () => {
  return ( // The data-theme = "forest" is the part of the daisyUi library we are using in the project you can visit the site and see everything
    <div className="rlative h-full w-full"> 
    <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]"/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
}

export default App