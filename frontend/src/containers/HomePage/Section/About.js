import React, { Component } from "react";
import { connect } from "react-redux";
import {FormattedMessage} from 'react-intl';



class About extends Component {

  render() {
    return (
      <div className="section-share section-about">
        <div className="section-about-header">
            Have a sip with Vũ
        </div>
        <div className="section-about-content">
            <div className="content-left">
            <iframe width="100%" height="400px" src="https://www.youtube.com/embed/8JTAh8VoO18" title="Thử bao nhiều lần trước khi dừng lại? - Vũ. | #HaveASip 93" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="content-right"><p>Hoàng Thái Vũ (sinh ngày 3 tháng 10 năm 1995), thường được biết đến với nghệ danh Vũ (cách điệu là Vũ.), là một nam ca sĩ kiêm nhạc sĩ sáng tác ca khúc người Việt Nam. Sinh ra trong gia đình có bố là quân nhân và mẹ là giáo viên, Vũ thường đăng tải các sáng tác của mình trên Soundcloud. Trước khi đi hát, Vũ từng gia nhập quân ngũ và làm giảng viên tiếng Anh tại Trường Sĩ quan Đặc công.</p></div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
