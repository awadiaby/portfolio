import React from 'react';
import Landingpage from './landingpage';
import {Switch, Route } from 'react-router-dom';
import Resume from './resume';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';



const Main = () => (
    <Switch>
         <Route exact path="/" component={Landingpage} />
         <Route  path="/resume" component={Resume} />
         <Route  path="/aboutme" component={AboutMe} />
         <Route  path="/contact" component={Contact} />
         <Route  path="/projects" component={Projects} />
    </Switch>
)

export default Main;