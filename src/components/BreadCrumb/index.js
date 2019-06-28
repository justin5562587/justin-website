import React, { Component } from 'react';
import Link from 'umi/link';
import style from './style.less';

export default class BreadCrumb extends Component {
  render() {
    // const pageTitle = window.document.title;
    return (
      <div className={style.breadCrumb}>
        <div className={style.breadCrumbInner}>
          <div className={style.toHome}><Link to="/">Home</Link></div>
          <div className={style.pageInfo}>
            <p className={style.pageInfoTitle}>CONTACT US</p>
            <p className={style.pageInfoNotice}>Contact us by submitting the form below</p>
          </div>
        </div>
      </div>
    );
  }
}
