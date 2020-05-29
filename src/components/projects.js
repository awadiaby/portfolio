import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

toggleCategories() {
    if(this.state.activeTab === 0){
        return(

            <div className="projects-grid">
                   { /* Projects 1 */} 

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'black', height: '176px', background: 'url(https://th.bing.com/th/id/OIP.Y4vpCQT5-SSNPGnLKZLFYgHaFP?w=280&h=198&c=7&o=5&pid=1.7) center / cover'}}>React Project #1</CardTitle>
                   <CardText>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border>
                      <Button colored>GitHub</Button>
                      <Button colored>CodePen</Button>
                      <Button colored>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                      <IconButton name="share" />
                    </CardMenu>
            </Card>

                  { /* Projects 2 */} 
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://th.bing.com/th/id/OIP.Y4vpCQT5-SSNPGnLKZLFYgHaFP?w=280&h=198&c=7&o=5&pid=1.7) center / cover'}}>React Project #2</CardTitle>
               <CardText>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
             </Card>

             { /* Projects 3 */} 
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://th.bing.com/th/id/OIP.Y4vpCQT5-SSNPGnLKZLFYgHaFP?w=280&h=198&c=7&o=5&pid=1.7) center / cover'}}>React Project #3</CardTitle>
               <CardText>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>GitHub</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
        </Card>
            </div>

           
     
        )   
     } else if(this.state.activeTab === 1) {
         return(
             <div><h1>This is Angular</h1></div>
         )
     } else if(this.state.activeTab === 2) {
        return(
            <div><h1>This is NodeJS</h1></div>
        )
     } else if(this.state.activeTab === 3) {
        return(
            <div><h1>This is VueJS </h1></div>
        )
     }

}



     render() {
         return (
             <div className="category-tabs">
                  <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                   <Tab>React</Tab>
                   <Tab>Angular</Tab>
                   <Tab>NodeJS</Tab>
                   <Tab>VueJS</Tab>
                 </Tabs>

                     <Grid>
                         <Cell col={12}>
                             <div className="content">  {this.toggleCategories()}  </div>
                         </Cell>
                     </Grid>
             </div>
         )
     }

}

export default Projects;