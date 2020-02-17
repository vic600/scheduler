import React from 'react';
import Header from './components/navbar'
import './App.css';
import Task from './components/tasks';
import { Provider } from 'react-redux';
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <div>
          <Task />
        </div>

      </div>
    </Provider>

  );
}

export default App;
