// action = {
//   type: 'CREATE_EVENT',
//   title: '2020年東京オリンピックのお知らせ',
//   body: '2020年に東京でオリンピックを開催します！つきましては・・・・・'
// }
// # before
// state = []
// state = [
//   {id: 1, title: 'タイトル1, body: 'ボディー1' },
//   {id: 2, title: 'タイトル1, body: 'ボディー1' },
//   {id: 3, title: 'タイトル1, body: 'ボディー1' }
// ]
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

const events: (state: eventState[] | undefined, action: eventForm) => eventState[]
  = (state: eventState[] = [], action: eventForm) => {
  switch(action.type) {
    case 'CREATE_EVENT':
      const event = { title: action.title, body: action.body };
      const length: number = state.length;
      let id: number = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, { id, ...event }];
    case 'DELETE_EVENT':

    case 'DELETE_ALL_EVENTS':
      return [];
    default:
      return state;
  }
};

export default events;