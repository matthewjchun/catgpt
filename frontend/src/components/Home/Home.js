import './Home.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function Home() {
  const mattSmells = () => {
    console.log('stinky uhoh');
  };

  return (
    <div>
      HI
      <Link to="/chat">
        <Button variant="contained" onClick={mattSmells}>
          go to chat
        </Button>
      </Link>
    </div>
  );
}

export default Home;
