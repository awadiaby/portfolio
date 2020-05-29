import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landingpage extends Component {
     render() {
         return (
             <div style={{with: '100%', margin: 'auto'}}>
                  <Grid className="landing-grid">
                        <Cell col={12}>
                            <img
                            src="https://i.pinimg.com/736x/cb/b2/1c/cbb21c2df26f80ff1b0b5f322762347e--black-artwork-african-american-art.jpg"
                            alt="avatar"
                            className="avatar-img"
                            />

                            <div className="banner-text">
                                <h1>Senior Developer</h1>

                                <hr/>
                                <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Angular | VueJS</p>

                                <div className="social-links">

                                    {/* Linkedin */}
                                    <a href="https://www.linkedin.com/in/awa-diaby-53757a150/" rel="noopener noreferrer"  target="_blank">
                                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                                    </a>

                                    {/* Github */}
                                    <a href="https://github.com/awadiaby" rel="noopener noreferrer"  target="_blank">
                                        <i className="fa fa-github-square" aria-hidden="true" />
                                    </a>

                                </div>
                            </div>
                        </Cell>
                 </Grid>
             </div>
         )
     }

}

export default Landingpage;