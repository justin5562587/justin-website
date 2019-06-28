import React, { Component } from 'react';
import BreadCrumb from '@/components/BreadCrumb';
import style from './style.less';

export default class Support extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.inner}>
          <BreadCrumb />
          <div className={style.body}>
            <div className={style.bodyInner}>
              <div className={style.bodyTitle}>
                弊社へのお問い合せ・ご質問などは以下フォームをご利用下さい。
                後日担当者よりご連絡差し上げます。
              </div>
              <div className={style.bodyForm}>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
