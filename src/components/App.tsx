import React, { useReducer, useState } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";

import Event from './Event';
// 作成したreducerを利用するためのimport
import reducer from '../reducers';

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

const App = () => {
  const [state, dispatch] = useReducer<(state: eventState[] | undefined, action: eventForm) => eventState[]>(reducer, []);
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const addEvent = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    // console.log({title, body});
    dispatch({
      type: 'CREATE_EVENT',
      title: title,
      body: body,
    });
    // 登録処理後に入力値を初期化
    setTitle("");
    setBody("");
  }

  const deleteAllEvents = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    // ボタンクリック時に発生するsubmit()を抑止して画面リロードを防ぐ（状態遷移を管理するSPAにおいて、変更したコンポーネントの状態以外も再読み込みされるのは考え方にそぐわないため）
    e.preventDefault();
    const result = window.confirm('全てのイベントを本当に削除しても良いですか？');
    if (result) dispatch({ type: 'DELETE_ALL_EVENTS' });
  }

  const unCreatable: boolean = title === '' || body === '';
  const unDeletable: boolean = state.length === 0;

  return (
    // JSX記法では、通常のHTMLとは異なるルールでダグのプロパティを作成する必要がある
    <div className='container-fluid'>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className='form-group'>
          {/* labelのhtmlFot(for)とinputのidの記載内容が一致していると、labelのクリックでinputにフォーカスが当たる様になる */}
          <label htmlFor='formEventTitle'>タイトル</label>
          {/* onChangeなどイベントハンドラーがないと、フォーカスを当てて入力しても受け付けてくれない（何も入力されない） */}
          <input className='form-control' id='formEventTitle' value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div className='form-group'>
          {/* labelのhtmlFot(for)とinputのidの記載内容が一致していると、labelのクリックでinputにフォーカスが当たる様になる */}
          <label htmlFor='formEventBody'>内容</label>
          <input className='form-control' id='formEventBody' value={body} onChange={e => setBody(e.target.value)} />
        </div>
        <button className='btn btn-primary' onClick={addEvent} disabled={unCreatable} >イベントを作成する</button>
        <button className='btn btn-danger' onClick={deleteAllEvents} disabled={unDeletable} >全てのイベントを削除する</button>
      </form>

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
    </div>
  );
}

export default App;
