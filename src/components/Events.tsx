import React from 'react'

import Event from './Event';

type eventForm = {
  type?: string;
  title?: string;
  body?: string;
  id?: number;
}
type eventState = {
  id: number;
  title?: string;
  body?: string;
}

const Events: React.FC<{ state: eventState[], dispatch: React.Dispatch<eventForm> }> = ({state, dispatch}) => {
  return (
    <>
      <h4>イベント一覧</h4>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>内容</th>
          </tr>
        </thead>
        <tbody>
          { state.map((event, index) => (<Event key={index} event={event} dispatch={dispatch}/>))}
        </tbody>
      </table>
    </>
  )
}

export default Events