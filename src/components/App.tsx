import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    // JSX記法では、通常のHTMLとは異なるルールでダグのプロパティを作成する必要がある
    <div className='container-fluid'>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className='form-group'>
          {/* labelのhtmlFot(for)とinputのidの記載内容が一致していると、labelのクリックでinputにフォーカスが当たる様になる */}
          <label htmlFor='formEventTitle'>タイトル</label>
          <input className='form-control' id='formEventTitle' />
        </div>
        <div className='form-group'>
          {/* labelのhtmlFot(for)とinputのidの記載内容が一致していると、labelのクリックでinputにフォーカスが当たる様になる */}
          <label htmlFor='formEventBody'>内容</label>
          <input className='form-control' id='formEventBody' />
        </div>
        <button className='btn btn-primary'>イベントを作成する</button>
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
