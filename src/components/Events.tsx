import React, { useContext } from 'react';

import Event from './Event';
import AppContext from '../contexts/AppContext';

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

const Events: React.FC<{}> = () => {
  // React Hooksが導入されてからの書き方
  const { state } = useContext(AppContext);
  return (
    <>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>内容</th>
          </tr>
        </thead>
        <tbody>
          {state.map((event: eventState, index: number) => (
            <Event key={index} event={event} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Events;
