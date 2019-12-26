import React, { Component } from 'react';
import { connect } from 'dva';
import style from './index.less';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

@connect(({ blog }) => ({
  blogList: blog.blogList,
}))
class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'blog/list',
    });
  }

  render() {
    const { blogList = [] } = this.props;
    console.warn(blogList)
    return (
      <div className={style.pageWrapper}>
        <Header
          title="Blog"
          description="Our everyday work is presented here, we do what we love, Case studies, video presentations and photo-shootings below."
        />
        <div className={style.pageInner}>
          <div className={style.blogList}>
            {
              blogList && blogList.map(i => (
                <div className={style.blogItem}>
                  <div className={style.itemPic} />
                  <div className={style.itemInfo}>
                    <p className={style.itemTitle}>{i.title}</p>
                    <p className={style.itemDescription}>{i.subtitle}</p>
                    <p className={style.itemTime}>{i.createTime}</p>
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

export default Blog;
