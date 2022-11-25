import React from 'react';
import Rutas from "./routes/Rutas"
import {AuthProvider} from './components/context/AuthContext';


const App = () => {
  return (
    <AuthProvider>
      <Rutas/>
    </AuthProvider>
  );
};

export default App;
