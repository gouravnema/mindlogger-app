import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, Image, Platform } from 'react-native';
import { connect } from 'react-redux';
import {Header, Left, Right, Body, Button, Title, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { openDrawer } from '../../actions/drawer';

class ActHeader extends Component {

  static propTypes = {
    title: PropTypes.string,
    onInfo: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4,
    };
  }

  render() {
    const { title, openDrawer, onInfo } = this.props;
    return (<Header>
      <Left>
        <Button transparent onPress={openDrawer}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body style={{flex:2}}>
          <Title>{title}</Title>
      </Body>
      <Right>
        {onInfo && 
        <Button transparent onPress={onInfo}>
          <Icon name="information-circle" />
        </Button>
        }
      </Right>
    </Header>);
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, bindAction)(ActHeader);
