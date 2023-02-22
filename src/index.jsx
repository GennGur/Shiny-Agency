import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Header from './components/Header'
import Error from './components/Error'
import Results from './pages/Results'
import Freelances from './pages/Freelances'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact  element={<Home />} path="/">
        </Route>
        <Route  element={<Survey />} path="/survey/:questionNumber">
        </Route>
        <Route element={<Results />} path="/results">
        </Route>
        <Route element={<Freelances />} path="/freelances">
        </Route>
        <Route element={<Error />} path="*">
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)


