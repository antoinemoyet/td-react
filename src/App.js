import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './dummy';
import SearchBar from './containers/search_bar.js';
import WorkList from './containers/work_list.js';
//import ListFilter from './containers/filter_list.js';


let data = ['dummy'];

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <WorkList/>
      </div>
    );
  }
}

export default App;
