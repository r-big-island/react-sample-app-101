import React, { useContext } from 'react';
import { eventForm, eventState } from '../@types/orgTypes';

import Event from './Event';
import AppContext from '../contexts/AppContext';

const Events: React.FC<{}> = () => {
  // React Hooksが導入されてからの書き方
  const { state } = useContext(AppContext);
  const events = state.events;
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
          {events.map((event: eventState, index: number) => (
            <Event key={index} event={event} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Events;
