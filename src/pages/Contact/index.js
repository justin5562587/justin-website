import React, { Component } from 'react';
import style from './index.less';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Input, Textarea } from '@/components/Form';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      username: null,
      message: null
    };
  }

  inputBlur = (type) => {
    return (e) => {
      if (type === 'email') {
        this.setState({ email: e.target.value });
      } else if (type === 'username') {
        this.setState({ username: e.target.value });
      }
    };
  };

  render() {
    return (
      <div className={style.pageWrapper}>
        <Header
          title="Contact"
          description="Contact us by entering this fields."
        />
        <div className={style.pageInner}>
          <div className={style.main}>
            <div className={style.form}>
              <Input label="Email" id="email-input" placeholder="please enter email" onBlur={this.inputBlur('email')} />
              <Input label="Username" id="username-input" placeholder="please enter username" onBlur={this.inputBlur('username')} />
              <Textarea label="Message" id="message-input" placeholder="please enter message" onBlur={this.inputBlur('message')} />
              <button className={style.submit}>Submit</button>
            </div>
            <div className={style.info}>
              <div className={style.infoItem}>
                <p>Email</p>
                <p>justin5562587@gmail.com</p>
              </div>
              <div className={style.infoItem}>
                <p>Address</p>
                <p>Change shanghai</p>
              </div>
              <div className={style.infoItem}>
                <p>Address</p>
                <p>Change shanghai</p>
              </div>
              <div className={style.infoItem}>
                <p>Address</p>
                <p>Change shanghai</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
