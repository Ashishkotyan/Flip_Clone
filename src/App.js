import { BrowserRouter, Switch, Route } from 'react-router-dom';

// components
import Header from './components/header/Header.jsx';
import Home from './components/home/Home';
import Card from './components/card/Card.jsx';
import Cart from './components/card/Cart.jsx';
import { TemplateProvider } from './templets/TemplateProvider.jsx';
import ContextProvider from './context/ContexPovider.jsx';
import Footer from './components/header/Footer.jsx';

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/Flip_Clone" component={Home} />
            <Route exact path="/Card:id" component={Card} />
            <Route exact path="/Cart" component={Cart} />
          </Switch>
          
          <Footer/>
        </BrowserRouter>
      </ContextProvider>


    </TemplateProvider>
  );
}

export default App;
