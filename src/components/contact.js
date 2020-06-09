import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2 style={{color:'#FD3022'}}>Salim Ahmed Tapader</h2>
            <img
              src="https://i.imgur.com/7EdXwue.jpg"
              alt="avatar"
              style={{height: '220px'}}
               />
             <p style={{ width: '95%', margin: 'auto', paddingTop: '1em', color: '#222'}}>I am a professional web application developer. I have developing website as a passion but I realized that it could be a good profession as well. I looking forward to contribute new features/techonologies to the community. As we all know that technology is evolving within a blink of an eye. Learning and growing with the evolution is absolute neccessity and that's that I love most as a developer/programmer. Send me a mail, even if you want a friend. I would love to expand my friend zone. </p>

          </Cell>
          <Cell col={6}>
            <h2 style={{color:'#FD3022'}}>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton', color: '#222'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (+880) 1404-961852
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton', color: '#222'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                    (+880) 1404-961852
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton', color: '#222'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    devsalim.ahmed@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton', color: '#222'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    MySkypeID
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
