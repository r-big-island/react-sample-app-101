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

export type appStates = {
  events: eventState[];
};

export type appContext = {
  state: appStates;
  dispatch?: React.Dispatch<eventForm>;
};
