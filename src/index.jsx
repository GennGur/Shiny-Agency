import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Header from './components/Header'
import Error from './components/Error'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
import GlobalStyle from './Utils/style/GlobalStyle'
import Footer from './components/Footer'
import { ThemeProvider, SurveyProvider } from './Utils/context'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <Router>
            <ThemeProvider>
                <SurveyProvider>
                    <GlobalStyle />
                    <Header />
                    <Routes>
                        <Route exact element={<Home />} path="/"></Route>
                        <Route
                            element={<Survey />}
                            path="/survey/:questionNumber"
                        ></Route>
                        <Route element={<Results />} path="/results"></Route>
                        <Route
                            element={<Freelances />}
                            path="/freelances"
                        ></Route>
                        <Route element={<Error />} path="*"></Route>
                    </Routes>
                    <Footer />
                </SurveyProvider>
            </ThemeProvider>
        </Router>
    </React.StrictMode>
)
