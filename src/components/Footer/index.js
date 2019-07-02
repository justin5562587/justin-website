import React, { Component } from 'react';
import Link from 'umi/link';
import style from './index.less';

export default class Footer extends Component {
  render() {
    return (
      <div className={style.footer}>
        <div className={style.footerInner}>
          <div className={style.footerLinks}>
            <Link to="/">Twitter</Link>
            <Link to="/">Twitter</Link>
            <Link to="/">Twitter</Link>
            <Link to="/">Twitter</Link>
            <Link to="/">Twitter</Link>
          </div>
          <p className={style.copyright}>© Copyright 2019 | Kalium Theme by Laborator</p>
        </div>
      </div>
    );
  }
}
