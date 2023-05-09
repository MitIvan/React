import Counter from './components/Counter';
import {Fragment} from 'react';
import Header from './components/Header';
import Auth from './components/Auth';
// import userProfile from './components/UserProfile';
import {useSelector} from 'react-redux';
import UserProfile from './components/UserProfile';



function App() {
    const isAuth = useSelector(state => state.auth.isAuth)
  return (
      <Fragment>
        <Header />
          {!isAuth && <Auth />}
          {isAuth && <UserProfile/>}
        <Counter />
      </Fragment>

  );
}

export default App;
