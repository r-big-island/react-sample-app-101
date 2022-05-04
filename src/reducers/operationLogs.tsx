import { actions, appStates, operationLog } from '../@types/orgTypes';
import { ADD_OPERATION_LOG, DELETE_ALL_OPERATION_LOGS } from '../actions';

const operationLogs: (state: appStates, action: actions) => appStates = (
  state: appStates,
  action: actions
) => {
  switch (action.operationForm.type) {
    case ADD_OPERATION_LOG:
      const operationLog: operationLog = {
        description: action.operationForm.description,
        operatedAt: action.operationForm.operatedAt,
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
