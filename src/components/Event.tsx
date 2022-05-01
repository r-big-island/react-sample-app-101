import React, { FC } from "react";

type eventForm = {
  type?: string;
  title?: string;
  body?: string;
  id?: number;
}

const Event: React.FC<{ event: eventForm, dispatch: React.Dispatch<eventForm> }> = ({ event, dispatch }) =>
{
  const id = event.id;
  const handleClickDeleteButton = () => {
    dispatch({ type: 'DELETE_EVENT', id})
  }
  return (
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button type='button' className='btn btn-danger' onClick={handleClickDeleteButton}>削除</button>
      </td>
    </tr>
  )
}


export default Event;