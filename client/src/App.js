import React from "react";
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';

import Events from './components/Events/Events';
import Form from './components/Form/Form';
import memories from './images/memories.png';
import useStyles from './styles';


const App = () =>{

    const classes = useStyles();

    return(
    <Container maxwidth ="lg">
        <AppBar className={classes.appBar} position="static" colour="inherit">
            <Typography className={classes.heading} varient="h2" align="center">Memories</Typography>
            <img src={memories} alt="memories" height="60" />
        </AppBar>
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing="{3}">
                    <Grid item xs={12} sm={7}>
                        <Events />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    </Container>
    );
}

export default App;