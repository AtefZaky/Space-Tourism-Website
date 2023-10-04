import { useState } from 'react';
import { Home , Crew , Destination , Technology} from './pages';
import { Routes , Route } from 'react-router-dom';
const App = () => {
  return (
    <main className='relative overflow-x-hidden'>
      <Routes>
        <Route 
          exact 
          path="/" 
          element={
          <Home />
          }
        />
        <Route 
          path="/crew" 
          element={
          <Crew />
          } 
        />
        <Route 
          path="/destination" 
          element={
          <Destination />
          } 
        />
        <Route 
          path="/technology" 
          element={
          <Technology />
          } 
        />
      </Routes>
    </main>
  )
}

export default App
