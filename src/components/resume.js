import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://i.imgur.com/7EdXwue.jpg"
                alt="avatar"
                style={{height: '200px', border: '5px solid #ddd', boxShadow: '5px 5px 5px #555'}}
                 />
            </div>

            <h3 style={{paddingTop: '2em', color:'#D4264F'}}>Salim Ahmed Tapader</h3>
            <h4 style={{color: 'grey'}}>Web Application Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I am a professional web application developer. I have developing website as a passion but I realized that it could be a good profession as well. I looking forward to contribute new features/techonologies to the community. As we all know that technology is evolving within a blink of an eye. Learning and growing with the evolution is absolute neccessity and that's that I love most as a developer/programmer. Send me a mail, even if you want a friend. I would love to expand my friend zone.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Sylhet, 3100</p>
            <h5>Phone</h5>
            <p>(+880) 1404-961852</p>
            <h5>Email</h5>
            <p>devsalim.ahmed@gmail.com</p>
            <h5>Web</h5>
            <p>https://devsalim.com/</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2016}
              endYear={2018}
              schoolName="North South University"
              schoolDescription="North South University is the best private university in Bangladesh. I have studied Computer Science and Engineering in NSU."
               />

               <Education
                 startYear={2019}
                 endYear={2020}
                 schoolName="Coders Trust"
                 schoolDescription="Coders Trust is one of best IT training institute in Bangladesh. The headquarter of CT is in Denmark. I have completed Responsive Web Design course from CT."
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2019}
              endYear={2020}
              jobName="Freelancing Job"
              jobDescription="I have worked on few project from fiverr.com and got 5 star reviews in all my projects. I have also worked on some local projects. I don't have any official experience."
              />

           
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="HTML"
                progress={98}
              />
              <Skills
                skill="CSS"
                progress={92}
              />
              <Skills
                skill="SASS"
                progress={85}
              />
              <Skills
                skill="javascript"
                progress={95}
              />
              <Skills
                skill="Bootstrap"
                progress={97}
              />
              <Skills
                skill="jQuery"
                progress={90}
              />
              <Skills
                skill="React"
                progress={70}
              />
              <Skills
                skill="WprdPress Theme Customization"
                progress={85}
              />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
