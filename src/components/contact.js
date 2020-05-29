import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
     render() {
         return (
             <div className="contact-body">
                 <Grid className="contact-grid">
                     <Cell col={6}>
                         <h2> Awa Diaby</h2>
                         <img 
                            src="https://image.shutterstock.com/image-vector/animation-portrait-young-beautiful-african-260nw-1203909901.jpg"
                            alt="avatar"
                            style={{height: '250px'}}
                         />
                         <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Etudiante en licence 3 MIAGE à l'université de Rennes1, pationner d'informatique
                         on va cliquer sur "fork" qui signifie "prend se repository et faire moi une copie à moi" 
                         après on va cloner le projet et ensuite apporter sa contributions avec des cmdes;
                          </p>
                     </Cell>
                     <Cell col={6}>
                         <h2> Contact Me</h2>
                         <hr/>

                         <div className="contact-list">
                         <List>
                             <ListItem>
                                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                      <i className="fa fa-phone-square" aria-hidden="true"/>
                                      +33 780837100
                                      </ListItemContent>
                             </ListItem>

                             <ListItem>
                                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                      <i className="fa fa-envelope" aria-hidden="true"/>
                                      awadiaby19@gmail.com
                                      </ListItemContent>
                             </ListItem>

                             <ListItem>
                                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                      <i className="fa fa-linkedin" aria-hidden="true"/>
                                     MyLinkedin
                                      </ListItemContent>
                             </ListItem>

                             <ListItem>
                                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                      <i className="fa fa-skype" aria-hidden="true"/>
                                     MySkype
                                      </ListItemContent>
                             </ListItem>
                             
                        </List>
                         </div>                         
                     </Cell>
                 </Grid>
             </div>
         )
     }

}

export default Contact;