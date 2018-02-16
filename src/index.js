import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/SearchBar';

const API_KEY = 'AIzaSyDSW8O4Dc3ak7LXZ23CBKljVlV2UOn7gvs';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
