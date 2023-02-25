import './Home.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import Header from './components/Header/Header';

function Home() {
  const mattSmells = () => {
    console.log('stinky uhoh');
  };

  return (
    <div className="home-background">
      <Header></Header>
      <Link to="/chat">
        <Button variant="contained" onClick={mattSmells}>
          go to chat
        </Button>
      </Link>
    </div>
  );
}

export default Home;
