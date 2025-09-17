import React, { Component } from "react";
import { connect } from "react-redux";
import {FormattedMessage} from 'react-intl';


class HomeFooter extends Component {

  render() {
    return (
      <div className="home-footer">
        <p>&copy; 2025 Vũ. More information, please hear his music. <a target="_blank" href="https://youtu.be/f9P7_qWrf38?si=M3RMh6DxTqNgXD5E">&#8594; Click here &#8592;</a>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
