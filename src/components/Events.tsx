import React from 'react';
import { appStates, eventState } from '../@types/orgTypes';
import { useAppSelector } from '../app/hooks';

import Event from './Event';

const Events: React.FC<{}> = () => {
  const events: eventState[] = useAppSelector(
    (state: appStates) => state.events
  );
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
