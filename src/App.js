import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import NavBar from './components/Navbar';
import FAQ from './components/faq_page/FAQ'; // Импортируем компонент ErrorBoundary
import Articles from './components/Articles/Articles';
import Article from './components/Articles/Article';
import Comments from './components/Comments/Comments';
import AboutUs from './components/Authentication/AboutUs';
import Login from './components/Authentication/Login';
import Cruds from './components/App/index';
import ContactUs from './components/contact/ContactUs';
import ErrorBoundary from './components/ErrorBoundary';
import CounterComponent from './components/CounterComponent';
import './styles/App.css';

function App() {
  const [topics, setTopics] = useState([]);

  return (
    <div className='App'>
      <NavBar topics={topics} setTopics={setTopics} />
      <ErrorBoundary>
        <Routes>
          <Route path='/*' element={<ErrorPage status={404} />} />
          <Route path='/' element={<Articles />} />
          <Route path='/counter' element={<CounterComponent />} /> {/* Пример добавления CounterComponent */}
          <Route path='/topics/:topic' element={<Articles topics={topics} setTopics={setTopics} />} />
          <Route path='/users' element={<AboutUs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/articles' element={<Articles topics={topics} setTopics={setTopics} />} />
          <Route path='/articles/:article_id' element={<Article />} />
          <Route path='/articles/:article_id/comments' element={<Comments />} />
          <Route path='/cruds' element={<Cruds />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;