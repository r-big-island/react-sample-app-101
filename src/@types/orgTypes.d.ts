export type eventForm = {
  type?: string;
  title?: string;
  body?: string;
  id?: number;
};

export type eventState = {
  id: number;
  title?: string;
  body?: string;
};

export type operationLog = {
  description?: string;
  operatedAt?: string;
};

export type appStates = {
  events: eventState[];
  operationLogs: operationLog[];
};

export type appContext = {
  state: appStates;
  dispatch?: React.Dispatch<eventForm>;
};
