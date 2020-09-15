import React from 'react';

// styles
import './scss/vars.scss';
import './scss/mixins.scss';
import './scss/reset.scss'
import './scss/global.scss';
import './App.scss';

// components
import { Modal } from './components';

function App() {
  return (
    <div className="App">
      <Modal />
    </div>
  );
}

export default App;
