import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';
import './component.css';

class Contact extends Component {
  render() {
    return (
      <div>
      
        <div className="mx-auto" bsStyle="width: 200px;">
        <h3>The easiest way to contact me is by email! Send your message below</h3>
        <br></br>
        <br></br>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Form>
            <FormGroup row>
              <Label for="email" sm={2}>Your Email</Label>
              <Col sm={10}>
                <Input type="email" name="email" id="email" placeholder="What's your email" />
              </Col>
            </FormGroup>
            
            
            
            <FormGroup row>
              <Label for="text" sm={2}>Message</Label>
              <Col sm={10}>
                <Input type="textarea" name="text" id="text" placeholder="What's your message" size="lg"/>
              </Col>
            </FormGroup>
            

            <FormGroup check row>
              <Col sm={{ size: 10, offset: 1 }}>
                <Button>Submit</Button>
              </Col>
            </FormGroup>
          </Form>
          </Col>
        </div>
        </div>
    );
  }
}

export default Contact;
