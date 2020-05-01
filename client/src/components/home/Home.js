import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import './home.css';

export class Home extends Component {
  render() {
    return (
      <div>
        <Container className="aboutMe">
          <h2>About Me</h2>
          <Row>
            <img src="./imgs/portfolio.jpg" />
            <Col>
              <p>
                My name is Shawn Tschoepe and I am currently the Director of
                Business Development at Southwest Education. While I am at work
                I do some sells but mostly I look for educational programs and
                try and see if they will fit into our company slogan. I have
                done some programming since high school. I have coded with
                Visual Basic, C++, Python, and JavaScript. I have been in my off
                time going to my local airport and trying to receive all the
                pilot ratings. I currently have my private license and have been
                on the National Intercollegiate Flight Team since 2016. While I
                was part of the team I was the captain and went to nationals
                three years in a row.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
