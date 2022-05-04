import React, { createContext } from 'react';
import {
  eventForm,
  eventState,
  appStates,
  appContext,
} from '../@types/orgTypes';

const initialState: appContext = { state: { events: [], operationLogs: [] } };
// createContextはデフォルト値を受け取るが、TypeScriptでは型安全を考慮するために
// デフォルト値のデータ型を引数（T）に指定しておく必要があるので、一旦anyをおいている
const AppContext = createContext<appContext>(initialState);

export default AppContext;
