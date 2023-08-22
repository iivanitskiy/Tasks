import React from 'react';
import {SApp} from "./assets/styles/app.styles";
import { Routes, Route } from 'react-router-dom';
import Task1 from "./pages/task1";
import Task2 from "./pages/task2";
import Task3 from "./pages/task3";
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const App = () => {
 
  return (
      <SApp>
        <Box
          sx={{
            typography: 'body1',
            height: '40px',
            marginTop: '10px',
            fontSize: '20px',
            '& > :not(style) + :not(style)': {
              ml: 5,
            },
          }}
        >
          <Link href="/Task1">Таск 1</Link>
          <Link href="/Task2">Таск 2</Link>
          <Link href="/Task3">Таск 3</Link>
        </Box>
          <Routes>
            <Route path='/task1' element={<Task1/>} />
            <Route path='/task2' element={<Task2/>} />
            <Route path='/task3' element={<Task3/>} />
          </Routes>
      </SApp>
  );
};

export default App;
