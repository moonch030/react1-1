import React from 'react';
import ReactDOM from 'react-dom/client';
import Clock from './ch04/Clock';
import './index.css';
import App from './App';
import Book from './ch03/Book';
import Library from './ch03/Library';
import reportWebVitals from './reportWebVitals';
import CommentList from './ch05/CommnetList';
import NotificationList from './ch06/NotificationList';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
      <NotificationList/>
    </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
