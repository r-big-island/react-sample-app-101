import React from 'react';
import { appStates, operationLog } from '../@types/orgTypes';
import { useAppSelector } from '../app/hooks';
import OperationLog from './OperationLog';

const OperationLogs: React.FC<{}> = () => {
  const operationLogs: operationLog[] = useAppSelector(
    (state: appStates) => state.operationLogs
  );
  return (
    <>
      <h4>操作ログ一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>内容</th>
            <th>日時</th>
          </tr>
        </thead>
        <tbody>
          {operationLogs.map((operationLog: operationLog, index: number) => {
            // OperationLogコンポーネントに渡す
            return <OperationLog key={index} operationLog={operationLog} />;
          })}
        </tbody>
      </table>
    </>
  );
};

export default OperationLogs;
