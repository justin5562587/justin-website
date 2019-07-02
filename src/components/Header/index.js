import React, { Component } from 'react';
import Link from 'umi/link';
import style from './style.less';

export default class Header extends Component {
  render() {
    const { title, description, category } = this.props;
    return (
      <div className={style.header}>
        <div className={style.inner}>
          <div className={style.nav}>
            <Link to="/" className={style.logo} />
            <div className={style.menu} />
          </div>
          <div className={style.pageInfo}>
            <div className={style.pageText}>
              <p className={style.pageTitle}>{title}</p>
              <p className={style.pageDescription}>{description}</p>
            </div>
            {
              category &&
              <div className={style.pageCategory}>
                {category.map(i => <span>{i}</span>)}
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}
