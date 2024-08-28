
import {Route, Routes} from 'react-router-dom';
import Home from './component/Home';
import Info from './component/Info';
import User from './component/User';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/info' element={<Info/>} />
      <Route path='/user' element={<User/>} />
    </Routes>
  );
}

export default App;
