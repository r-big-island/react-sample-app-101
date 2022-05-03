import { createContext } from 'react';

// createContextはデフォルト値を受け取るが、TypeScriptでは型安全を考慮するために
// デフォルト値のデータ型を引数（T）に指定しておく必要があるので、一旦anyをおいている
const AppContext = createContext<any>(undefined);

export default AppContext;
