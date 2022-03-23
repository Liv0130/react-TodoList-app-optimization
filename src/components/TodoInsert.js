import { useState, useCallback } from 'react'; 
import { BsPencil } from "react-icons/bs";
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [ value, setValue ] = useState('');

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue(''); // value 값 초기화
    
      // submit 이벤트는 브라우저에서 새로고침을 발생시킵니다.
      // 이를 방지하기 위해 이 함수를 호출합니다.
      e.preventDefault();
    },
    [onInsert, value],
  )

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input placeholder="I am going to do..." 
      value={ value }
      onChange={ onChange }
      />
      <button type="submit">
        <BsPencil/>
      </button>
    </form>
  )
}
export default TodoInsert;