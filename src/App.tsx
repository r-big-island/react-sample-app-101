import { type } from '@testing-library/user-event/dist/type';
import React, { useState }  from 'react';

interface statesSampleType {
  name: string;
  price: number;
}

const App: React.FC<statesSampleType> = (props) => {
  const [name, setName] = useState<string>(props.name);
  const [price, setPrice] = useState<number>(props.price);

  const reset = () => {
    setPrice(props.price);
    setName(props.name);
  }
  return (
    <>
      <p>現在の{name}は、{price}円です。</p>
      <button onClick={() => setPrice(price + 1)}>+1</button>
      <button onClick={() => setPrice(price - 1)}>-1</button>
      <button onClick={reset}>Reset</button>
      {/* e.target.value: onChangeが発生したときにinput入力欄に入力されている値を拾う書き方（お約束的） */}
      <input value={name} onChange={e => setName(e.target.value)} />
    </>
  );
}

// App.defaultProps = {
//   name: '',
//   price: 1000
// };

export default App;
