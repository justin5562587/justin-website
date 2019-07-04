import React, { Component } from 'react';
// import { connect } from 'dva';
import style from './index.less';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const blog = [1, 1, 1, 1];

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className={style.pageWrapper}>
        <Header
          title="Blog"
          description="Our everyday work is presented here, we do what we love, Case studies, video presentations and photo-shootings below."
        />
        <div className={style.pageInner}>
          <div className={style.blogList}>
            {
              blog.map(i => (
                <div className={style.blogItem}>
                  <div className={style.itemPic} />
                  <div className={style.itemInfo}>
                    <p className={style.itemTitle}>Fashions fade, style is eternal {i}</p>
                    <p className={style.itemDescription}>
                      Fanny pack beard pop-up twee tote bag DIY. Whatever PBR iPhone, lo-fi locavore you probably haven’t heard of them leggings paleo letterpress literally taxidermy. Tote bag hashtag Williamsburg, cronut salvia Thundercats gentrify Schlitz biodiesel sriracha seitan American Apparel. Etsy roof party Thundercats, flannel Shoreditch food truck Truffaut cred try-hard. Paleo aesthetic Wes Anderson cliche. Sartorial…
                    </p>
                    <p className={style.itemTime}>March 14, 2015</p>
                  </div>
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
