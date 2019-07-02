import React, { Component } from 'react';
import Link from 'umi/link';
import style from './style.less';

export default class Header extends Component {
  render() {
    return (
      <div className={style.header}>
        <div className={style.inner}>
          <Link to="/" className={style.logo} />
          <div className={style.menu} />
        </div>
      </div>
    );
  }
}
