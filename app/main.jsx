'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter, Route, Switch } from 'react-router-dom';


import store from './store'
import Root from './components/Root'
import Students from './components/Students'
import Home from './components/Home'

render (
  <Provider store={store}>
    <HashRouter>
      <div>
    <Route exact path='/' component={Home} />
    <Route exact path='/students' component={Students} />
     </div>
     </HashRouter>
  </Provider>,
  document.getElementById('main')
)
