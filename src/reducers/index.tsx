import { CREATE_EVENT, DELETE_EVENT, DELETE_ALL_EVENTS } from '../actions';

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

const events: (state: eventState[] | undefined, action: eventForm) => eventState[]
  = (state: eventState[] = [], action: eventForm) => {
  switch(action.type) {
    case CREATE_EVENT:
      const event = { title: action.title, body: action.body };
      const length: number = state.length;
      let id: number = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, { id, ...event }];
    case DELETE_EVENT:
      return state.filter(event => event.id !== action.id);
    case DELETE_ALL_EVENTS:
      return [];
    default:
      return state;
  }
};

export default events;