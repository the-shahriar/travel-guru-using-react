import { BrowserRouter as Router, Switch, Route, useLocation, BrowserRouter} from 'react-router-dom';
import './App.css';
import UserProvider from './context/UserProvider';
import Navigate from './Navigate/Navigate';

function App() {

  return (
    <UserProvider>
      <BrowserRouter>
        <Navigate></Navigate>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
