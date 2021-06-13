import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import styles from './App.module.less'

import WenHuaYouXian from './container/wen-hua-you-xian'
import SanWuHuan from './container/san-wu-huan'
import Home from './container'

function App () {
  return (
    <div className={styles.app}>
      <Router>
        <h2>
          <Link to="/">Logo Hub</Link>
        </h2>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/wen-hua-you-xian">文化有限</Link>
              </li>
              <li>
                <Link to="/san-wu-huan">三五环</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/wen-hua-you-xian">
              <WenHuaYouXian />
            </Route>
            <Route exact path="/san-wu-huan">
              <SanWuHuan />
            </Route>
          </Switch>
        <div style={{ textAlign: 'center' }}>
          底部信息待新增 = =
        </div>
      </div>
      </Router>
    </div>
  )
}

export default App
