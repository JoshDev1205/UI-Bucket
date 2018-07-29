import * as React from 'react';
import { autobind } from 'core-decorators';
import classnames from 'classnames';

export interface InputProps {
  type?: string;
  defaultText?: string;
  placeholder?: string;
  valid?: boolean;
  disabled?: boolean;
  onChange: (e?: React.ChangeEvent<HTMLInputElement>, val?: string) => void;
  withIcon?: boolean;
  icon?: any;
}

interface InputState {
  value: string;
}

export default class Input extends React.Component<InputProps, InputState> {
  static defaultProps: InputProps = {
    type: 'text',
    defaultText: '',
    onChange: () => {}
  };

  state = {
    value: ''
  }

  componentDidMount() {
    const { defaultText } = this.props;
    this.setState({ value: defaultText || '' });
  }

  @autobind()
  private onInput(e: any): void {
    this.setState({ value: e.target.value }, () => {
      const { onChange } = this.props;
      const { value } = this.state;
      onChange(e, value);
    });
  }

  private buildCssClass(): string {
    const { valid } = this.props;
    return classnames(
      'input',
      valid !== undefined && valid ? 'input--valid' : '',
      valid !== undefined && !valid ? 'input--invalid' : ''
    );
  }

  render() {
    const { type, placeholder, disabled, withIcon, icon } = this.props;
    const { value } = this.state;
    const className: string = this.buildCssClass();

    return withIcon ? (
      <div className="input-addon">
        <input
          type={type}
          className={className}
          value={value}
          placeholder={placeholder}
          onInput={this.onInput}
          disabled={disabled}
        />
        <div className="input--icon">
          { icon }
        </div>
      </div>
    ) : (
      <input
        type={type}
        className={className}
        value={value}
        placeholder={placeholder}
        onInput={this.onInput}
        disabled={disabled}
      />
    );
  }
}
