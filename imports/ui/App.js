import React from 'react';
import PropTypes from 'prop-types';
import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList'

export default class App extends React.Component {
  render() {
    return (
      <div>
        {/*Render h1 tag with title var as text*/}
        <TitleBar title={this.props.title} subtitle={this.props.subtitle}/>
        {/* Create div with wrapper class. Add PlayerList & AddPlayer inside*/}
        <PlayerList players={this.props.players}/>
        <AddPlayer/>
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  players: PropTypes.array.isRequired
};
