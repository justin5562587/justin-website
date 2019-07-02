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
        <Header
          title="Work"
          description="Our everyday work is presented here, we do what we love, Case studies, video presentations and photo-shootings below."
          category={['All', 'Life', 'Game', 'Painting', 'Japanese']}
        />
        <div className={style.pageInner}>
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
