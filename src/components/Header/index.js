import React, { Component } from 'react';
import Link from 'umi/link';
import style from './style.less';

export default class Header extends Component {
  render() {
    return (
      <div className={style.header}>
        <div className={style.inner}>
          <div className={style.logo} />
          <ul className={style.links}>
            <li><Link to="/">News</Link></li>
            <li><Link to="/support">Support</Link></li>
            <li><Link to="/support">Support</Link></li>
            <li><Link to="/support">Support</Link></li>
            <li><Link to="/support">Support</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}
