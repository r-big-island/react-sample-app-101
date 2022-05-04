import { appStates } from '../@types/orgTypes';
import { ADD_OPERATION_LOG, DELETE_ALL_OPERATION_LOGS } from '../actions';

const operationLogs: (state: appStates, action: any) => appStates = (
  state: appStates,
  action: any
) => {
  switch (action.type) {
    case ADD_OPERATION_LOG:
      const operationLog = {
        description: action.description,
        operatedAt: action.operatedAt,
      };
      return {
        events: state.events,
        operationLogs: [operationLog, ...state.operationLogs],
      };

    case DELETE_ALL_OPERATION_LOGS:
      return { events: state.events, operationLogs: [] };

    default:
      return state;
  }
};

export default operationLogs;
