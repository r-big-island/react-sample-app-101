import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { eventForm, eventState } from '../@types/orgTypes';
import { APP_KEY } from '../actions';

// データの永続化対応
const storedData: string | null = localStorage.getItem(APP_KEY);
const initialState: eventState[] = storedData
  ? JSON.parse(storedData).events
  : [];

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    CREATE_EVENT: (state: eventState[], action: PayloadAction<eventForm>) => {
      const event = {
        title: action.payload.title,
        body: action.payload.body,
      };
      const length: number = state.length;
      let id: number = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, { id, ...event }];
    },
    DELETE_EVENT: (state: eventState[], action: PayloadAction<eventForm>) => {
      return state.filter((event) => event.id !== action.payload.id);
    },
    DELETE_ALL_EVENTS: () => {
      return [];
    },
  },
});

export const { CREATE_EVENT, DELETE_EVENT, DELETE_ALL_EVENTS } =
  eventsSlice.actions;
export default eventsSlice.reducer;
// const events: (state: appStates, action: actions) => appStates = (
//   state: appStates,
//   action: actions
// ) => {
//   switch (action.eventForm.type) {
//     case CREATE_EVENT:
//       const event = {
//         title: action.eventForm.title,
//         body: action.eventForm.body,
//       };
//       const length: number = state.events.length;
//       let id: number = length === 0 ? 1 : state.events[length - 1].id + 1;
//       return {
//         events: [...state.events, { id, ...event }],
//         operationLogs: state.operationLogs,
//       };
//     case DELETE_EVENT:
//       return {
//         events: state.events.filter(
//           (event) => event.id !== action.eventForm.id
//         ),
//         operationLogs: state.operationLogs,
//       };
//     case DELETE_ALL_EVENTS:
//       return { events: [], operationLogs: state.operationLogs };
//     default:
//       return state;
//   }
// };

// export default events;
