import './Landing.css';
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, CardMedia, Typography, CardActionArea, CardActions } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import kitten from '../../../../static/kitten1.png'

function Landing() {

    return (
        <div className="landing-container">
            <div className="landing-card">
                <Card sx={{ maxWidth: "inherit", backgroundColor: '#AEC3B0' }} className="landing-card">
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div">
                                CatGPT: <br />
                                Optimizing Cat Knowledge for Everyone
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
                        <Link to="/chat">
                            <Button variant="outlined" endIcon={<ArrowOutwardIcon />}>
                                Go to Chat
                            </Button>
                        </Link>
                    </CardActions>
                </Card>
            </div>
            <div className="landing-picture">
                <img src={kitten} alt="small kitten"/>
            </div>
        </div>
    );
}

export default Landing;
