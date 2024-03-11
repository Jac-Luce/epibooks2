import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/Navbar/MyNav';
import MyFooter from './components/Footer/MyFooter';
import Welcome from './components/WelcomeAlert/Welcome';

export default function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <MyFooter />
    </>
  )
}