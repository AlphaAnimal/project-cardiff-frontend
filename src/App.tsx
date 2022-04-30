import { Stack } from '@mui/material';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './routes/Main';


const App: React.FC<{}> = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Main view={''} />} /> 
          <Route path="/home" element={<Main view={''} />} /> 
          <Route path="/scores" element={<Main view={'scores'} />} /> 
          <Route path="/profile" element={<Main view={'profile'} />} /> 
          <Route path="/settings" element={<Main view={'settings'} />} /> 
          <Route path="/about" element={<Main view={'about'} />} /> 
          <Route path="/login" element={<Main view={'login'} />} />
          <Route path="/register" element={<Main view={'register'} />} />
          <Route path="/logout" element={<Main view={'login'}/>} />
        </Routes>
    </Router>
  );
}

export default App;
