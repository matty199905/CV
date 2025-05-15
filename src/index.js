import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import GlobalStylesComponent from './Styles/GlobalStyles.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <Provider store={store}>
    <App />
    <GlobalStylesComponent/>
    </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

