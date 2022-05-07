import { configureStore } from '@reduxjs/toolkit';

import events from '../reducers/events';
import operationLogs from '../reducers/operationLogs';

const reducer = {
  events: events,
  operationLogs: operationLogs,
};

const store = configureStore({
  reducer: reducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
