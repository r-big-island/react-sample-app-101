import { CREATE_EVENT, DELETE_EVENT, DELETE_ALL_EVENTS } from '../actions';
import { eventForm, eventState, appStates } from '../@types/orgTypes';

const events: (state: appStates, action: eventForm) => appStates = (
  state: appStates,
  action: eventForm
) => {
  switch (action.type) {
    case CREATE_EVENT:
      const event = { title: action.title, body: action.body };
      const length: number = state.events.length;
      let id: number = length === 0 ? 1 : state.events[length - 1].id + 1;
      return {
        events: [...state.events, { id, ...event }],
        operationLogs: state.operationLogs,
      };
    case DELETE_EVENT:
      return {
        events: state.events.filter((event) => event.id !== action.id),
        operationLogs: state.operationLogs,
      };
    case DELETE_ALL_EVENTS:
      return { events: [], operationLogs: state.operationLogs };
    default:
      return state;
  }
};

export default events;
