import React, { useReducer } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import EventForm from './EventForm';
import Events from './Events';
// contextを利用するためのimport
import AppContext from '../contexts/AppContext';
// 作成したreducerを利用するためのimport
import reducer from '../reducers';

type eventForm = {
  type?: string;
  title?: string;
  body?: string;
  id?: number;
};
type eventState = {
  id: number;
  title?: string;
  body?: string;
};

const App: React.FC = () => {
  const [state, dispatch] = useReducer<
    (state: eventState[] | undefined, action: eventForm) => eventState[]
  >(reducer, []);

  return (
    // React Hooksが導入されてからの書き方（Provider側は変更なし）
    // AppContext.Providerタグに囲まれた要素であれば、孫コンポーネントになってもvalueに渡されたデータをProvideすることができる
    <AppContext.Provider value={{ state, dispatch }}>
      {/* JSX記法では、通常のHTMLとは異なるルールでダグのプロパティを作成する必要がある */}
      <div className="container-fluid">
        {/* useContextを使えば下記コンポーネント内でvalue値を参照することができる様になる！（孫コンポーネントに値を渡すためにデータのバケツリレーをせずに済む！！ */}
        <EventForm />
        <Events />
      </div>
    </AppContext.Provider>
  );
};

export default App;
