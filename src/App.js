
import './App.css';
import Main from "./componentes/Main";
import Footer from "./componentes/Footer";
import Cards from "./componentes/Cards";
import SlideShow from "./componentes/SlideShow";

import React from "react";
import ReactDOM from "react-dom";
import Header from "./componentes/Header";


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Header />
      </header>
      <body className="App-body">
      <Main />

      </body>
      <footer>
          <Footer />

      </footer>
    </div>
  );

}

export default App;
