import React, { Component } from 'react';
import Link from 'umi/Link';
import style from './index.less';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const works = [1, 1, 1, 1, 1, 1, 1, 11, 1, 1];

export default class Work extends Component {
  render() {
    return (
      <div className={style.pageWrapper}>
        <Header />
        <div className={style.pageInner}>
          <div className={style.workHeader}>
            <div className={style.workInfo}>
              <p className={style.workTitle}>Portfolio</p>
              <p className={style.workDescription}>Our everyday work is presented here, we do what we love,
                Case studies, video presentations and photo-shootings below.
              </p>
            </div>
            <div className={style.workCategory}>
              <span>All</span>
              <span>Life</span>
              <span>Game</span>
              <span>Painting</span>
              <span>Japanese</span>
            </div>
          </div>
          <div className={style.workList}>
            {
              works.map(i => (
                <div className={style.workItem}>
                  <Link to="/">
                    <div className={style.itemPic} />
                    <div className={style.itemInfo}>
                      <p className={style.itemTitle}>Album Covers</p>
                      <p className={style.itemDescription}>People_{i}</p>
                    </div>
                  </Link>
                </div>
              ))
            }
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
