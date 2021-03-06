import React, { Component } from 'react';
import Main from '../Components/Main';
// import Dropdown from '../Components/Dropdown';
import '../App.css';

class App extends Component {

  render() {
    return (
      <div className='background'>
        <div className='container'>
          <div className='border'>
          <div className='col-md'>
            <div className="App">
              <div className='page-header bgcolor2'>
                <div className='header-color'>
                  <a href='https://github.com/sendmebiscuits'>
                    https://github.com/sendmebiscuits
                  </a>
                </div>
              </div>
              <br/>
              <h3 className='display-3'>Thomas Lee</h3>
              <Main/>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;