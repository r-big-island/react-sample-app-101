import React from 'react';
import { operationLog } from '../@types/orgTypes';

const OperationLog: React.FC<{ operationLog: operationLog }> = ({
  operationLog,
}) => {
  return (
    <tr>
      <td>{operationLog.description}</td>
      <td>{operationLog.operatedAt}</td>
    </tr>
  );
};

export default OperationLog;
