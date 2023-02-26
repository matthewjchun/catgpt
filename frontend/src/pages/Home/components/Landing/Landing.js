import './Landing.css';
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, Typography, CardActionArea, CardActions } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import kitten from '../../../../static/kitten1.png';

function Landing() {
  return (
    <div className="landing-container">
      <div className="landing-card">
        <Card
          sx={{ width: '30rem', maxWidth: 'inherit', backgroundColor: '#AEC3B0' }}
          className="landing-card"
        >
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                CatGPT
                <br />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                CatGPT responds to greetings, thanks, and goodbyes. <br />
                In addition, CatGPT can give you:
                <br />- cat jokes!
                <br />- cat facts!
                <br />- summaries of specific cat breeds!
                <br />
                <br />
                Examples:
                <br />- "Hello!"
                <br />- "Goodbye!"
                <br />- "Thank you!"
                <br />- "Tell me a cat joke"
                <br />- "I want a cat fact"
                <br />- "What can you tell me about the Ragdoll cat?"
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to="/chat" style={{ textDecoration: 'none' }}>
              <Button endIcon={<ArrowOutwardIcon />}>Go to Chat</Button>
            </Link>
          </CardActions>
        </Card>
      </div>
      <div className="landing-picture">
        <img src={kitten} alt="small kitten" />
      </div>
    </div>
  );
}

export default Landing;
