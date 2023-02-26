import './Home.css';
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
