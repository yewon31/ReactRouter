
import {useContext, useRef} from 'react';
import UserContext from '../context/ContextAPI2';


function A() {

  const {state, action} = useContext(UserContext); //사용하고 싶은 ContextAPI를 넣어줍니다.

  const idRef = useRef();
  const nameRef = useRef();

  const handleClick = () => {
    //action안에는 setState가 들어있습니다.
    action.setUser( {id: idRef.current.value,
                     name: nameRef.current.value} );
  }

  return (
    <>
      <h3>A컴포넌트</h3>

      <input type="text" name="id" ref={idRef} />
      <input type="text" name="name" ref={nameRef} />
      <button type="button" onClick={handleClick}>값 변경</button>
      <br/>

      {state.id}<br/>
      {state.name}<br/>

    </>
  )

}

export default A;