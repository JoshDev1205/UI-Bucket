// @flow
/* eslint react/button-has-type: off */
import React from 'react';
import classnames from 'classnames';
// import './index.css';

interface ButtonProps {
  type?: string;
  size?: string;
  outline?: boolean;
  icon?: boolean;
  fab?: boolean;
  featured?: boolean;
  onClick?: (e: Event) => void;
  children: any | Array<any>;
  htmlType?: string;
}

class Button extends React.Component<ButtonProps> {
  static defaultProps = {
    type: 'primary',
    onClick: () => {},
    htmlType: 'button'
  };

  buildCssClass(): string {
    const {
      type,
      size,
      outline,
      icon,
      fab,
      featured
    } = this.props;
    return classnames(
      'btn',
      type ? `btn--${type}` : 'btn--primary',
      size ? `btn--${size}` : '',
      outline ? 'btn--outline' : '',
      icon ? 'btn--icon' : '',
      fab ? 'btn--fab' : '',
      featured ? 'btn--featured' : ''
    );
  }

  render() {
    const {
      children,
      htmlType,
      onClick
    } = this.props;
    const className = this.buildCssClass();
    return (
      <button
        type={htmlType}
        className={className}
        onClick={onClick}
      >
        { children }
      </button>
    );
  }
}

export default Button;
