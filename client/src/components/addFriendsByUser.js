import React from 'react';
import { Button, Modal, Table, Form, FormGroup, FormControl, Col, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setFriendsInfo } from '../actions/outputActions.js';

const mapStateToProps = state => {
  return {
    friendsInfo: state.output.friendsInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setFriendsInfo: (input) => dispatch(
      setFriendsInfo(input)
    ),
  };
};

export class AddFriendsByUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      name: 'Joe',
      validationState: null,
      number: '7146844358'
    };
  }

  close() {
    if (this.state.name === 'Joe') {
      this.setState({
        showModal: false
      });
      this.saveFriendInfo();
    } else {
      this.setState({
        validationState: 'error'
      });
    }
  }

  open() {
    this.setState({ showModal: true });
  }

  handleChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  saveFriendInfo() {
    let friendInformation = {
      friendName: this.state.name,
      friendNumber: this.state.number
    };
    this.props.setFriendsInfo(friendInformation);
  }

  render() {
    return (
      <div className="col-xs-offset-6">
        <Button id="add-friends-by-user" bsStyle="primary" bsSize="small" onClick={this.open.bind(this)}>
          Add Friends By Username
        </Button>
        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Add a friend by Username</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form horizontal>
              <FormGroup controlId="formAddFriendByUser" validationState={this.state.validationState}>
                <Col componentClass={ControlLabel} sm={2}>
                  Username
                </Col>
                <Col sm={10}>
                  <FormControl type="text" placeholder="Friend's username" onChange={this.handleChange.bind(this)}/>
                </Col>
              </FormGroup>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" onClick={this.close.bind(this)}>ADD</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFriendsByUser);
