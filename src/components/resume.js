import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Competence from './competence';

class Resume extends Component {
     render() {
         return (
             <div>
                 <Grid>
                     <Cell col={4}>
                         <div style={{textAlign: 'center'}}>
                             <img 
                               src="http://ageheureux.a.g.pic.centerblog.net/fc2ec15f.jpg"
                               alt="avatar"
                               style={{height: '200px'}}
                             />
                         </div>

                         <h2 style={{paddingTop: '2em'}}>Awa Diaby</h2>
                         <h4 style={{color: 'grey'}}>Programmer</h4>
                         <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                         <p>on va cliquer sur "fork" qui signifie "prend se repository et faire moi une copie à moi" 
                            après on va cloner le projet et ensuite apporter sa contributions avec des cmdes;
                            on peut créer des branches et modifier le code ensuite l'envoyer au responsables qui s'occupe des librairies pour
                               qu'il la prenne en compte , on clique sur "CREATE PULL REQUEST".</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Adresse</h5>
                        <p>7 Allée de la Pommeraie</p>
                        <h5>Phone</h5>
                        <p>+33 780837100</p>
                        <h5>Email</h5>
                        <p>awadiaby19@gmail.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

                     </Cell>

                     <Cell className="resume-right-col" col={8}>
                         <h2>Education</h2>


                         <Education 
                           startYear={2015}
                           endYear={2015}
                           schoolName="Lycée Classique d'Abidjan"
                           schoolDescription="université abidjan, la ville de la côte d'ivoire"
                           />
                             <hr/>
                         <Education 
                           startYear={2015}
                           endYear={2018}
                           schoolName="Université Nangui Abrogoua"
                           schoolDescription="université abidjan, la ville de la côte d'ivoire"
                           />
                            <hr/>
                        <Education 
                           startYear={2019}
                           endYear="A Aujoudhui"
                           schoolName="Université Rennes1"
                           schoolDescription="université abidjan, la ville de la côte d'ivoire"
                           />
                           <hr style={{ borderTop: '3px solid #e22947'}}/>

                           <h2>Experience Professionnelle</h2>

                           <Experience
                               startMonth="Septembre - Octobre"
                               endYear={2017}
                               jobName="Stage"
                               EntrepriseName="Dalove Cosmetique"
                               jobDescription="blablabla"
                           
                           />

                         <Experience
                               startMonth="Septembre - Octobre"
                               endYear={2017}
                               jobName="Stage"
                               EntrepriseName="Daov"
                               jobDescription="blablabla"
                           
                           />

                           <Experience
                               startMonth="Septembre - Octobre"
                               endYear={2017}
                               jobName="Stage"
                               EntrepriseName="Bouph"
                               jobDescription="blablabla"
                           />
                           <hr style={{ borderTop: '3px solid #e22947'}}/>

                           <h2>Compétences</h2>
                           <Competence
                               competence="HTML/CSS"
                               progress={100} 
                           />
                            <Competence
                               competence="JavaScript"
                               progress={80} 
                           />
                            <Competence
                               competence="NodeJS"
                               progress={50} 
                           />
                            <Competence
                               competence="React"
                               progress={79} 
                           />
                            <Competence
                               competence="Angular"
                               progress={40} 
                           />

                     </Cell>
                 </Grid>
             </div>
         )
     }

}

export default Resume;