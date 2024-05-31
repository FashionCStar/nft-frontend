import ReactDOM from 'react-dom';

import { Provider } from "react-redux";
import { createStore } from "redux";

import App from './App';
const initialState = {
  search: {
    search: '',
    sort: '',
    category: [],
    price: {"min":0, "max": Number.MAX_SAFE_INTEGER},
  }
};
function reducer(state = initialState, action: any) {
  switch (action.type) {
    case "changeState": {
      return {
        search: {
          search: action.search.search,
          sort: action.search.sort,
          category: action.search.category,
          price: action.search.price,
        }
      };
    }
    default:
      return {
        search: {
          search: '',
          sort: '',
          category: [],
          price: {"min":0, "max": Number.MAX_SAFE_INTEGER},
        }
      };
  }
}
const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
