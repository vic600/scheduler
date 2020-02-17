import React, { Component } from 'react';
import {
    Card,Col,Row,Container, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import {connect}from'react-redux';
import { getTasks } from '../actions/taskActions';
import { PropTypes } from "prop-types";
class Tasks extends Component {
    componentDidMount() {
        this.props.getTasks();
    }
    render() {
        return (
         <Container fluid={true}>
              
            <Row>
            <Col xs="12" md="4" lg="4">
          
            </Col>
            </Row>
         </Container>
           
            
        
        );
    }
}

Tasks.propTypes={
    getTasks:PropTypes.func.isRequired,
    //tasks:PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
    return {
         tasks: state.tasks
    }
}

export default connect(mapStateToProps,{getTasks})(Tasks);