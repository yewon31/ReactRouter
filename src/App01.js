
import {Route, Routes} from 'react-router-dom';
import Home from './component/Home';
import Info from './component/Info';
import User from './component/User';
import Board from './component/Board';
import BoardContent from './component/BoardContent';
import Header from './layout/Header';
import MyPage from './component/MyPage';

function App() {
  return (
    
    <Routes>
      {/* 중첩라우터 */}
      <Route element={<Header/>}>
        <Route path='/' element={<Home/>} />
        <Route path='/info/:num' element={<Info/>} />
        <Route path='/user' element={<User/>} />
      </Route>

      {/* 
      <Route path='/board' element={<Board/>} />
      <Route path='/board/:num' element={<BoardContent/>} />
      */}      

      {/* 중첩라우터 */}
      <Route path="/board" element={<Board/>}>
        <Route path=":num" element={<BoardContent/>}/>
      </Route>

      
      {/* naviagte컴포넌트 */}
      <Route path="/mypage" element={<MyPage/>}/>

    </Routes>
  );
}

export default App;
