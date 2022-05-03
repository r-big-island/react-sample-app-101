import React, { createContext } from 'react';

type eventForm = {
  type?: string;
  title?: string;
  body?: string;
  id?: number;
};
type eventState = {
  id: number;
  title?: string;
  body?: string;
};
type appContext = {
  state: eventState[];
  dispatch?: React.Dispatch<eventForm>;
};
// createContextはデフォルト値を受け取るが、TypeScriptでは型安全を考慮するために
// デフォルト値のデータ型を引数（T）に指定しておく必要があるので、一旦anyをおいている
const AppContext = createContext<appContext>({ state: [] });

export default AppContext;
