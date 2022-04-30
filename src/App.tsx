import { type } from '@testing-library/user-event/dist/type';
import React, { useState }  from 'react';

interface statesSampleType {
  name: string;
  price: number;
}

const App: React.FC<statesSampleType> = (props) => {
  const [state, setState] = useState(props);
  // 分割代入を行うことで、state.~となっているところをリファクタリングできる
  const { name, price } = state;
  // const [name, setName] = useState(props.name);
  // const [price, setPrice] = useState<number>(props.price);

  const reset = () => setState(props); // {
    // setPrice(props.price);
    // setName(props.name);
    // setState(props);
  // }
  return (
    <>
      <p>現在の{name}は、{price}円です。</p>
      {/* <button onClick={() => setPrice(price + 1)}>+1</button>
      <button onClick={() => setPrice(price - 1)}>-1</button> */}
      <button onClick={() => setState({...state, price: price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: price - 1})}>-1</button>
      {/* <button onClick={reset}>Reset</button> */}
      <button onClick={() => setState(props)}>Reset</button>
      {/* e.target.value: onChangeが発生したときにinput入力欄に入力されている値を拾う書き方（お約束的） */}
      {/* <input value={state.name} onChange={e => setName(e.target.value)} /> */}
      <input value={state.name} onChange={e => setState({...state, name: e.target.value})} />
    </>
  );
}

// App.defaultProps = {
//   name: '',
//   price: 1000
// };

export default App;
