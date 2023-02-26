import './Home.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';

function Home() {

  return (
    <div className="home-background">
      <Header></Header>
      <Landing></Landing>
    </div>
  );
}

export default Home;
