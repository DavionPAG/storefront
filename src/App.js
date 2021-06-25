import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Products from './components/storefront/products'
import { Provider } from "react-redux";
import store from './store/index'
import './app.css'

function App() {

  return (
    <>
      <Provider store={store}>
        <Header />
        <Products />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
