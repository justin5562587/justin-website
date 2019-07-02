import React, { Component } from 'react';
import style from './index.less';
import Footer from '@/components/Footer';
import Header from '@/components/Header';


export default class Contact extends Component {
  render() {
    return (
      <div className={style.pageWrapper}>
        <Header
          title="Contact"
          description="Contact us by entering this fields."
        />
        <div className={style.pageInner}>
          <div className={style.info}>

          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
