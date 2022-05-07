import React, { useEffect, useReducer } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import EventForm from './EventForm';
import Events from './Events';
import store from '../store/store';
import { Provider } from 'react-redux';

const App: React.FC = () => {
  return (
    // React Hooksが導入されてからの書き方（Provider側は変更なし）
    // AppContext.Providerタグに囲まれた要素であれば、孫コンポーネントになってもvalueに渡されたデータをProvideすることができる
    // {/* JSX記法では、通常のHTMLとは異なるルールでダグのプロパティを作成する必要がある */}
    <Provider store={store}>
      <div className="container-fluid">
        <EventForm />
        <Events />
      </div>
    </Provider>
  );
};

export default App;
