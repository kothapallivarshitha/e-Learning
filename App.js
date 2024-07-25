import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Home from './components/Home';
import CssCourse from './components/CssCourse';
// /components/index.js

import CssBasicTopic1 from './components/CssBasicTopic1';
import CssBasicTopic2 from './components/CssBasicTopic2';
import CssBasicTopic3 from './components/CssBasicTopic3';
import CssBasicTopic4 from './components/CssBasicTopic4';

import CssIntTopic1 from './components/CssIntTopic1';
import CssIntTopic2 from './components/CssIntTopic2';
import CssIntTopic3 from './components/CssIntTopic3';
import CssIntTopic4 from './components/CssIntTopic4';

import CssAdvancedTopic1 from './components/CssAdvancedTopic1';
import CssAdvancedTopic2 from './components/CssAdvancedTopic2';
import CssAdvancedTopic3 from './components/CssAdvancedTopic3';
import CssAdvancedTopic4 from './components/CssAdvancedTopic4';

import './App.css';

const App = () => {
    return (
        <Router>
            <div className="container">
                <header>
                    <h1>E-Learning Platform</h1>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={
                            <>
                                <section className="welcome-section">
                                    <h2>Welcome to Our E-Learning Platform</h2>
                                    <p>Explore the world of coding with our interactive and comprehensive courses designed for learners of all levels. Dive deep into the digital realm and upskill yourself today!</p>
                                </section>
                                <section className="course-section">
                                    <div className="auth-buttons">
                                        <Link to="/login" className="login-btn">Login</Link>
                                        <Link to="/register" className="register-btn">Register</Link>
                                    </div>
                                </section>
                            </>
                        } />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/home" element={<Home/>} />
                        <Route path="/css-course" element={<CssCourse/>} />
                        <Route path="/css-basic-topic-1" element={<CssBasicTopic1 />} />
                        <Route path="/css-basic-topic-2" element={<CssBasicTopic2 />} />
                        <Route path="/css-basic-topic-3" element={<CssBasicTopic3 />} />
                        <Route path="/css-basic-topic-4" element={<CssBasicTopic4 />} />

                        <Route path="/css-intermediate-topic-1" element={<CssIntTopic1 />} />
                        <Route path="/css-intermediate-topic-2" element={<CssIntTopic2 />} />
                        <Route path="/css-intermediate-topic-3" element={<CssIntTopic3 />} />
                        <Route path="/css-intermediate-topic-4" element={<CssIntTopic4 />} />

                        <Route path="/css-advanced-topic-1" element={<CssAdvancedTopic1 />} />
                        <Route path="/css-advanced-topic-2" element={<CssAdvancedTopic2 />} />
                        <Route path="/css-advanced-topic-3" element={<CssAdvancedTopic3 />} />
                        <Route path="/css-advanced-topic-4" element={<CssAdvancedTopic4 />} />



                    </Routes>
                </main>
                <footer>
                    <p>© 2023 E-Learning Platform. All rights reserved.</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;