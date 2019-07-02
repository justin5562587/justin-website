import React, { Component } from 'react';
import style from './index.less';

export class Input extends Component {
  render() {
    const { label, id, type = 'text', inputBlur } = this.props;
    return (
      <div className={style.inputWrap}>
        <label htmlFor={id}>{label}</label>
        <input id={id} type={type} onBlur={inputBlur} />
      </div>
    );
  }
}

export class Textarea extends Component {
  render() {
    const { label, id, inputBlur } = this.props;
    return (
      <div className={style.textareaWrap}>
        <label htmlFor={id}>{label}</label>
        <textarea name="" id={id} cols="30" rows="10" onBlur={inputBlur} />
      </div>
    );
  }
}
