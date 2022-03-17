import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './routes/Main';


const App: React.FC<{}> = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Main />} /> 
          <Route path="/profile" element={<Main />} /> 
          <Route path="/settings" element={<Main />} /> 
          <Route path="/about" element={<Main />} /> 
          <Route path="/login" element={<Main />} />
          <Route path="/register" element={<Main />} />
        </Routes>
    </Router>
  );
}

export default App;
