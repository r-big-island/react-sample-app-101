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
    // React Hooksが導入されるより前の書き方
    <AppContext.Provider value={'Hello, I am a Provider'}>
      {/* JSX記法では、通常のHTMLとは異なるルールでダグのプロパティを作成する必要がある */}
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch} />
      </div>
    </AppContext.Provider>
  );
};

export default App;
