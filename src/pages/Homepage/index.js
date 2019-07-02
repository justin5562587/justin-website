import React, { Component } from 'react';
import style from './style.less';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default class Homepage extends Component {
  render() {
    return (
      <div className={style.pageWrapper}>
        <Header />
        <div className={style.pageInner}>
          homepage
        </div>
        <Footer />
      </div>
    );
  }
}
