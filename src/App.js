import logo from './logo.svg';
import './App.css';
import './component/icon.css';
import Header from './component/header';
import ProductList from './component/bodyhi';
import Boxchat from './component/boxchat';
import { createContext } from 'react';

export const closeBoxchat = createContext()

function App() {


  return (
    <div className="App">
      <Header></Header>
      <ProductList></ProductList>
      <closeBoxchat.Provider value={true}>
        <Boxchat></Boxchat>
      </closeBoxchat.Provider>

    <div className="icon">
        <img class= "iconmess" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Font_Awesome_5_brands_facebook-messenger_color.svg/1792px-Font_Awesome_5_brands_facebook-messenger_color.svg.png"/>
    </div>

    </div>
  );
}

export default App;
