import React, { useReducer, useState } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";

// 作成したreducerを利用するためのimport
import reducer from '../reducers';

type eventForm = {
  type: string;
  title: string;
  body: string;
}
type eventState = {
  id: number;
  title: string;
  body: string;
}

const App = () => {
  const [state, dispatch] = useReducer<(state: eventState[] | undefined, action: eventForm) => eventState[]>(reducer, []);
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const addEvent = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    console.log({title, body});
    dispatch({
      type: 'CREATE_EVENT',
      title: title,
      body: body,
    });
    // 登録処理後に入力値を初期化
    setTitle("");
    setBody("");
  }
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
        <button className='btn btn-primary' onClick={addEvent}>イベントを作成する</button>
        <button className='btn btn-danger'>全てのイベントを削除する</button>
        <button>イベントを作成する</button>
      </form>

      <h4>イベント一覧</h4>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>内容</th>
          </tr>
          <tbody>
          </tbody>
        </thead>
      </table>
    </div>
  );
}

export default App;
