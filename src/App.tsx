import React, { useEffect, useState }  from 'react';

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

  // レンダリング（DOMが描画）された後に動く（画面上の値が変更されない場合は、ボタン押下などしてもレンダリングされない）
  useEffect(() => {
    console.log('This is like componentDidMount or componentDidUpdate.');
  });
  // useEffectの第二引数に空の配列（「[]」）を渡してあげると、初期描画レンダリングの直後のみ実行されるuseEffectを実装できる
  useEffect(() => {
    console.log('This is like componentDidMount');
  }, []);
  // 特定のパラメータ変更時のレンダリング直後のみ実行するuseEffectを実装する場合は、第二引数の配列に着目したいパラメータを渡しておく（通常のuseEffect同様、初期描画時にも動く）
  useEffect(() => {
    console.log('This callback is for name only');
  }, [name]);
  // const renderPeriod = () => {
  //   console.log('renderPeriod renders period');
  //   return '。';
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
