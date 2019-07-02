import React, { Component } from 'react';
import style from './index.less';

export default class Blog extends Component {
  render() {
    return (
      <div className={style.blog}>
        <div className={style.blogInner}>
          blog
        </div>
      </div>
    );
  }
}
