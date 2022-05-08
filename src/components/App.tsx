import React, { useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import EventForm from './EventForm';
import Events from './Events';
import OperationLogs from './OperationLogs';
import { useAppSelector } from '../app/hooks';
import { APP_KEY } from '../actions';

const App: React.FC = () => {
  const state = useAppSelector((state) => state);
  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state));
  }, [state]);
  return (
    // React Hooksが導入されてからの書き方（Provider側は変更なし）
    // AppContext.Providerタグに囲まれた要素であれば、孫コンポーネントになってもvalueに渡されたデータをProvideすることができる
    // {/* JSX記法では、通常のHTMLとは異なるルールでダグのプロパティを作成する必要がある */}
    // <Provider store={store}>
    <div className="container-fluid">
      <EventForm />
      <Events />
      <OperationLogs />
    </div>
    // </Provider>
  );
};

export default App;
