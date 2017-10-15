'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter, Route, Link } from 'react-router-dom';


import store from './store'
import Root from './components/Root'
import Students from './components/Students'
import Home from './components/Home'

render (
  <Provider store={store}>
    <HashRouter>
      <div className= "main">
          <nav>
            <div className="nav-item">
              <a href="#">home</a>
            </div>
            <div className="nav-item">
              <Link to= '/students' >students </Link>
            </div>
          </nav>
        <div className = "body">
          <Route exact path='/' component={Home} />
          <Route exact path='/students' component={Students} />
        </div>
      </div>
     </HashRouter>
  </Provider>,
  document.getElementById('main')
)
