import React from 'react';
import { eventState } from '../@types/orgTypes';

import { DELETE_EVENT } from '../reducers/events';
import { useAppDispatch } from '../app/hooks';

const Event: React.FC<{
  event: eventState;
}> = ({ event }) => {
  const dispatch = useAppDispatch();
  const id = event.id;
  const handleClickDeleteButton = () => {
    const result = window.confirm(
      `イベント(id=${id})を本当に削除して良いですか？`
    );
    if (result) dispatch(DELETE_EVENT({ id }));
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
