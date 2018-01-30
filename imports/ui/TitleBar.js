import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
  renderSubtitle() {
    if(this.props.subtitle) {
      return <h2>{this.props.subtitle}</h2>;
    }
    // if we dont explicitly return
    // sth from our function, it implicityly returns undefined
  }

  render() {
    return (
      <div className="title-bar">
        <div className="wrapper">
          <h1>{this.props.title}</h1>
          {this.renderSubtitle()}
        </div>
      </div>
    );
  }
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

TitleBar.defaultProps = {
  //title: 'Default title'
};
