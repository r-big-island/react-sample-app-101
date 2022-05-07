import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { operationForm, operationLog } from '../@types/orgTypes';

const initialState: operationLog[] = [];

const opeLogSlice = createSlice({
  name: 'operationLog',
  initialState,
  reducers: {
    ADD_OPERATION_LOG: (
      state: operationLog[],
      action: PayloadAction<operationForm>
    ) => {
      const operationLog: operationLog = {
        description: action.payload.description,
        operatedAt: action.payload.operatedAt,
      };
      return (state = [operationLog, ...state]);
    },
    DELETE_ALL_OPERATION_LOGS: (state: operationLog[]) => {
      return (state = []);
    },
  },
});

export const { ADD_OPERATION_LOG, DELETE_ALL_OPERATION_LOGS } =
  opeLogSlice.actions;
export default opeLogSlice.reducer;

// const operationLogs: (state: appStates, action: actions) => appStates = (
//   state: appStates,
//   action: actions
// ) => {
//   switch (action.operationForm.type) {
//     case ADD_OPERATION_LOG:
//       const operationLog: operationLog = {
//         description: action.operationForm.description,
//         operatedAt: action.operationForm.operatedAt,
//       };
//       return {
//         events: state.events,
//         operationLogs: [operationLog, ...state.operationLogs],
//       };

//     case DELETE_ALL_OPERATION_LOGS:
//       return { events: state.events, operationLogs: [] };

//     default:
//       return state;
//   }
// };

// export default operationLogs;
