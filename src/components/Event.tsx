import React, { FC, useContext } from 'react';
import { actions, eventForm } from '../@types/orgTypes';

import { DELETE_EVENT } from '../actions';
import AppContext from '../contexts/AppContext';

const Event: React.FC<{
  event: eventForm;
}> = ({ event }) => {
  const { dispatch } = useContext(AppContext);
  const id = event.id;
  const handleClickDeleteButton = () => {
    const result = window.confirm(
      `イベント(id=${id})を本当に削除して良いですか？`
    );
    if (result && dispatch != undefined)
      dispatch({ eventForm: { type: DELETE_EVENT, id }, operationForm: {} });
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleClickDeleteButton}
        >
          削除
        </button>
      </td>
    </tr>
  );
};

export default Event;
