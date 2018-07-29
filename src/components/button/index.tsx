import * as React from 'react';
import classnames from 'classnames';

export interface ButtonProps {
  type?: string;
  size?: string;
  outline?: boolean;
  icon?: boolean;
  fab?: boolean;
  featured?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  children: any;
  htmlType?: string;
}

export default class Button extends React.Component<ButtonProps> {
  static defaultProps: ButtonProps = {
    type: 'primary',
    onClick: () => {},
    htmlType: 'button',
    children: [],
    outline: false,
    icon: false,
    fab: false,
    featured: false
  };

  private buildCssClass(): string {
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
