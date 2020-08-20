import React from 'react';
import './App.css';
import Product from './components/Product/Product';
import { Provider} from 'react-redux';


function App() {

  return (
    <div className="App">
      <Provider>
      <Product>
      </Product>
      </Provider>
    </div>
  );
}

export default App;
