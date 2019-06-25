import React, { Component } from 'react'
import style from './style.less'
import Header from '@/components/Header';

export default class Homepage extends Component {
  render() {
    return(
      <div className={style.wrapper}>
        <Header />
        <div className={style.inner}>
          <div className={style.banner}>banner</div>
          <div className={style.offer}>
            <div className={style.offerItem} />
            <div className={style.offerItem} />
            <div className={style.offerItem} />
            <div className={style.offerItem} />
          </div>
          <div className={style.topic}>
            <div className={style.topicInner}>
              <div className={style.topicTitle}>
                <div className={style.topicMark}>Topic</div>
                <ul className={style.topicBars}>
                  <li className={style.topicBar}>News</li>
                  <li className={style.topicBar}>Topic</li>
                  <li className={style.topicBar}>Message</li>
                </ul>
              </div>
              <div className={style.topicContent}>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
