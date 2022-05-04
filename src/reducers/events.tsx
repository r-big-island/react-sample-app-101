import { CREATE_EVENT, DELETE_EVENT, DELETE_ALL_EVENTS } from '../actions';
import { eventForm, eventState, appStates } from '../@types/orgTypes';

// type eventForm = {
//   type?: string;
//   title?: string;
//   body?: string;
//   id?: number;
// };
// type eventState = {
//   id: number;
//   title?: string;
//   body?: string;
// };

const events: (state: appStates, action: eventForm) => appStates = (
  state: appStates,
  action: eventForm
) => {
  switch (action.type) {
    case CREATE_EVENT:
      const event = { title: action.title, body: action.body };
      const length: number = state.events.length;
      let id: number = length === 0 ? 1 : state.events[length - 1].id + 1;
      return { events: [...state.events, { id, ...event }] };
    case DELETE_EVENT:
      return { events: state.events.filter((event) => event.id !== action.id) };
    case DELETE_ALL_EVENTS:
      return { events: [] };
    default:
      return state;
  }
};

export default events;
