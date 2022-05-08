import React, { useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import EventForm from './EventForm';
import Events from './Events';
import OperationLogs from './OperationLogs';
import { useAppSelector } from '../app/hooks';
import { APP_KEY } from '../actions';
import { appStates } from '../@types/orgTypes';

const App: React.FC = () => {
  const state: appStates = useAppSelector((state: appStates) => state);
  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state));
  }, [state]);
  return (
    <div className="container-fluid">
      <EventForm />
      <Events />
      <OperationLogs />
    </div>
  );
};

export default App;
