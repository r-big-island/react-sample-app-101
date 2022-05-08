import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { operationForm, operationLog } from '../@types/orgTypes';
import { APP_KEY } from '../actions';

// データの永続化対応
const storedData: string | null = localStorage.getItem(APP_KEY);
const initialState: operationLog[] = storedData
  ? JSON.parse(storedData).operationLogs
  : [];

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
