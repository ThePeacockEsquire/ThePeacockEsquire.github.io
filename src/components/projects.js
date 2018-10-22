import React, { Component } from 'react';
import './component.css';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardGroup, Col } from 'reactstrap';

class Projects extends Component {
  render() {
    return (
      <div>
          <Col sm="12" md={{ size: 8, offset: 2 }}>
        <CardGroup>
          <Card>
            <CardImg top width="100%" src="https://umasscomedyleague.files.wordpress.com/2018/07/embroidery.png?w=800&h=800" alt="UCL Alumni App" />
            <CardBody>
              <CardTitle>UCL Alumni App</CardTitle>
              <CardSubtitle>For the UMass Comedy League</CardSubtitle>
              <CardText>A searchable database for everyone who has ever been in the UCL</CardText>
              <Button href="https://thepeacockesquire.github.io/actual_ucl_alumni">See it live here!</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg top width="100%" src="https://pathlightgroup.org/wp-content/uploads/2017/08/PLG-LD-poster-C06-cleaned-no-text-1-smaller-for-web-576x786.png" alt="Let's Dance" />
            <CardBody>
              <CardTitle>Let's Dance Video Editor</CardTitle>
              <CardSubtitle>For Pathlight Group</CardSubtitle>
              <CardText>Filmed and editted promotional content for Pathlight for their Let's Dance 2017 event</CardText>
              <Button href="https://www.youtube.com/watch?v=vN_9MZOQWfM">Watch one here!</Button>
            </CardBody>
          </Card>
        </CardGroup>
        </Col>
    </div>
    );
  }
}

export default Projects;
