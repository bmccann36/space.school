'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter, Route, Link } from 'react-router-dom';


import store from './store'
import Root from './components/Root'
import Nav from 'components./Nav'
import StudentsHome from './components/StudentsHome'
import Home from './components/Home'

render(
  <Provider store={store}>
    <HashRouter>
      <div className= "main">

          <Route path='/' component={Nav} />
          <Route path='/' component={Home} />
          <Route exact path='/students' component={StudentsHome} />

      </div>
     </HashRouter>
  </Provider>,
  document.getElementById('main')
)
