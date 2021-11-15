import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </div>
      <div className="footer">
        <h1>Bubos.gg</h1>
        <p>
          Do you have what it takes to ace the ghastly missions that awaits you?
        </p>
      </div>
    </BrowserRouter>
  )
}

export default App
