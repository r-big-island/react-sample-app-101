import React, { useState }  from 'react';

const App: React.FC = () => {
  const initialState = 0;
  const [count, setCount] = useState<number>(initialState);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const increment2 = () => setCount(previousCount => previousCount + 1);
  const decrement2 = () => setCount(previousCount => previousCount - 1);

  const reset = () => setCount(initialState);
  const double = () => setCount(previousCount => previousCount * 2);
  // ▼ 自分の実装
  const devideMultipleOfThree = () => {
    const devidedCount: number = count / 3;
    if (Number.isInteger(devidedCount)) setCount(devidedCount);
  }
  // ▼ 参考の実装
  const devide3 = () => setCount(previousCount => {
    return previousCount % 3 === 0 ? previousCount /3 : previousCount;
  });

  // JSXは、returnする要素のトップレベルは一つだけ！
  return (
    // JSXの表記方法
    <React.Fragment>
      {/* トップレベルの要素を2つ以上に保ちたい時はReact.Fragment,または<></>で囲む */}
      <div>count: {count}</div>
      <div>
        {/* onClickに渡す関数を「イベントハンドラー」と呼ぶ */}
        <button onClick={ increment }>+1</button>
        <button onClick={ decrement }>-1</button>
      </div>
      <div>
        <button onClick={ increment2 }>+1</button>
        <button onClick={ decrement2 }>-1</button>
      </div>
      <div>
        <button onClick={ reset }>Reset</button>
        <button onClick={ double }>x2</button>
        <button onClick={ devide3 }>3の倍数の時だけ3で割る</button>
      </div>
    </React.Fragment>
  );
}

export default App;
