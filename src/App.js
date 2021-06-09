import React from 'react'
import { TodosProvider } from './context/context'
import All from './pages/All'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Completed from './pages/Completed'
import Today from './pages/Today'
import Tomorrow from './pages/Tomorrow'
export const App = () => {
  return (
    <>
      <main className='container mt-5'>
        <TodosProvider>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>

              <Route path='/all'>
                <All />
              </Route>

              <Route path='/completed'>
                <Completed />
              </Route>

              <Route path='/today'>
                <Today />
              </Route>

              <Route path='/tomorrow'>
                <Tomorrow />
              </Route>

              <Route path='*'>
                <h1 className='display-1 text-center'>Error 404</h1>
              </Route>
            </Switch>
          </Router>
        </TodosProvider>
      </main>
    </>
  )
}
