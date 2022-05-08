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

export type operationForm = {
  type?: string;
  description?: string;
  operatedAt?: string;
};

export type actions = {
  eventForm: eventForm;
  operationForm: operationForm;
};

export type appStates = {
  events: eventState[];
  operationLogs: operationLog[];
};
