/* @flow */
import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import classnames from 'classnames';

export interface InputProps {
  valid?: boolean;
  invalid?: boolean;
  disabled?: boolean;
  onChange: (e?: any, val?: string) => void;
}

interface InputState {
  value: string;
}

export default class Input extends Component<InputProps, InputState> {
  static defaultProps: InputProps = {
    onChange: () => {}
  };

  constructor(props: any) {
    super(props);
    this.state = {
      value: ''
    };
  }

  @autobind()
  onInput(e: any): void {
    this.setState({ value: e.target.value }, () => {
      const { onChange } = this.props;
      const { value } = this.state;
      onChange(e, value);
    });
  }

  buildCssClass(): string {
    const { valid, invalid } = this.props;
    return classnames(
      'input',
      valid && !invalid ? 'input--valid' : '',
      !valid && invalid ? 'input--invalid' : ''
    );
  }

  render() {
    const { disabled } = this.props;
    const { value } = this.state;
    const className: string = this.buildCssClass();
    return (
      <input
        className={className}
        value={value}
        onInput={this.onInput}
        disabled={disabled}
      />
    );
  }
}
