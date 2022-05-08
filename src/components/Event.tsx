import React from 'react';
import { eventState } from '../@types/orgTypes';

import { DELETE_EVENT } from '../reducers/events';
import { useAppDispatch } from '../app/hooks';
import { ADD_OPERATION_LOG } from '../reducers/operationLogs';
import { timeCurrentIso8601 } from '../utils/utils';
import { AppDispatch } from '../store/store';

const Event: React.FC<{
  event: eventState;
}> = ({ event }) => {
  const dispatch: AppDispatch = useAppDispatch();
  const id = event.id;
  const handleClickDeleteButton = () => {
    const result = window.confirm(
      `イベント(id=${id})を本当に削除して良いですか？`
    );
    if (result) {
      dispatch(DELETE_EVENT({ id }));
      dispatch(
        ADD_OPERATION_LOG({
          description: `イベント(id=${id}を削除しました。)`,
          operatedAt: timeCurrentIso8601(),
        })
      );
    }
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
