import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { appStates, eventState, operationLog } from '../@types/orgTypes';

import { CREATE_EVENT, DELETE_ALL_EVENTS } from '../reducers/events';
import {
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS,
} from '../reducers/operationLogs';
import { AppDispatch } from '../store/store';
import { timeCurrentIso8601 } from '../utils/utils';

const EventForm: React.FC<{}> = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const events: eventState[] = useAppSelector(
    (state: appStates) => state.events
  );
  const opeLog: operationLog[] = useAppSelector(
    (state: appStates) => state.operationLogs
  );

  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');

  const addEvent = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(
      CREATE_EVENT({
        title: title,
        body: body,
      })
    );
    dispatch(
      ADD_OPERATION_LOG({
        description: 'イベントを作成しました。',
        operatedAt: timeCurrentIso8601(),
      })
    );
    // 登録処理後に入力値を初期化
    setTitle('');
    setBody('');
  };

  const deleteAllEvents = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    // ボタンクリック時に発生するsubmit()を抑止して画面リロードを防ぐ（状態遷移を管理するSPAにおいて、変更したコンポーネントの状態以外も再読み込みされるのは考え方にそぐわないため）
    e.preventDefault();
    const result = window.confirm(
      '全てのイベントを本当に削除しても良いですか？'
    );
    if (result) {
      dispatch(DELETE_ALL_EVENTS());
      dispatch(
        ADD_OPERATION_LOG({
          description: '全てのイベントを削除しました。',
          operatedAt: timeCurrentIso8601(),
        })
      );
    }
  };

  const deleteAllOperationLogs = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    e.preventDefault();
    const result = window.confirm(
      '全ての操作ログを本当に削除しても良いですか？'
    );
    if (result) dispatch(DELETE_ALL_OPERATION_LOGS());
  };

  const unCreatable: boolean = title === '' || body === '';
  const unDeletable: boolean = events.length === 0;
  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          {/* labelのhtmlFot(for)とinputのidの記載内容が一致していると、labelのクリックでinputにフォーカスが当たる様になる */}
          <label htmlFor="formEventTitle">タイトル</label>
          {/* onChangeなどイベントハンドラーがないと、フォーカスを当てて入力しても受け付けてくれない（何も入力されない） */}
          <input
            className="form-control"
            id="formEventTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          {/* labelのhtmlFot(for)とinputのidの記載内容が一致していると、labelのクリックでinputにフォーカスが当たる様になる */}
          <label htmlFor="formEventBody">内容</label>
          <input
            className="form-control"
            id="formEventBody"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button
          className="btn btn-primary"
          onClick={addEvent}
          disabled={unCreatable}
        >
          イベントを作成する
        </button>
        <button
          className="btn btn-danger"
          onClick={deleteAllEvents}
          disabled={unDeletable}
        >
          全てのイベントを削除する
        </button>
        <button
          className="btn btn-danger"
          onClick={deleteAllOperationLogs}
          disabled={opeLog.length === 0}
        >
          全ての操作ログを削除する
        </button>
      </form>
    </>
  );
};

export default EventForm;
