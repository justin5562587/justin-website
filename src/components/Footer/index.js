import React, { Component } from 'react';
import Link from 'umi/link';
import style from './index.less';

export default class Footer extends Component {
  render() {
    return (
      <div className={style.footer}>
        <div className={style.footerInner}>
          <div className={style.footerLinks}>
            <Link to="/">Home</Link>
            <Link to="/work">Works</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/">Twitter</Link>
          </div>
          <p className={style.copyright}>© Copyright 2019 | Kalium Theme by Laborator</p>
        </div>
      </div>
    );
  }
}
