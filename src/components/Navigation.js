import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Grid} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Carousel from "react-bootstrap/Carousel";

import one from "../images/sovir/1.png";
import two from "../images/sovir/2.png";
import three from "../images/sovir/3.png";
import four from "../images/sovir/4.png";
import five from "../images/sovir/5.png";
import six from "../images/sovir/6.png";
import seven from "../images/sovir/7.png";

export default function Navigation() {
    return (
        <Router>
            <div className='app'>
                <Container>
                    <Switch>
                        <Route path="/"><Home /></Route>
                        <Route path="/sovir"><Home /></Route>
                        <Route path="/newsviy"><Home /></Route>
                        <Route path="/hafyz"><Home /></Route>
                    </Switch>
                </Container>
            </div>
        </Router>
    );
}

const iframe = '<iframe src="https://appetize.io/embed/5zpcpafet5pz9bu621j4wet8zm?device=iphone8" width="378px" height="800px" frameborder="0" scrolling="no"></iframe>';

function Iframe(props) {
    return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
}

function Home() {
    return(
        <div className='pageContainer'>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={8}>
                    <h5 className='text'>Slide Show</h5>
                    <Carousel interval={null}>
                        <Carousel.Item><img className='image' src={one}  alt='one'/></Carousel.Item>
                        <Carousel.Item><img className='image' src={two}  alt='two' /></Carousel.Item>
                        <Carousel.Item><img className='image' src={three}  alt='three' /></Carousel.Item>
                        <Carousel.Item><img className='image' src={four}  alt='four' /></Carousel.Item>
                        <Carousel.Item><img className='image' src={five}  alt='five' /></Carousel.Item>
                        <Carousel.Item><img className='image' src={six}  alt='six' /></Carousel.Item>
                        <Carousel.Item><img className='image' src={seven}  alt='seven' /></Carousel.Item>
                    </Carousel>
                </Grid>
                <Grid item xs={6} sm={2}>
                    <h5 className='text'>Live Demo</h5>
                    <Iframe iframe={iframe} />
                </Grid>
            </Grid>
        </div>
    )
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}