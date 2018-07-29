import * as React from 'react';
import Button from './button';
import Input from './input';

export default class App extends React.PureComponent<{}> {
  private onButtonClick(e: React.MouseEvent<HTMLButtonElement>) {
    console.log(e);
  }
  private onInputChange(e: React.ChangeEvent<HTMLInputElement>, newVal: string) {
    console.log(e, newVal);
  }
  render() {
    return (
      <div className="container">
        <h1 className="h1">Buttons</h1>
        <section className="buttons-container">
          {/* Basic buttons */}
          <Button
            type="primary"
            onClick={this.onButtonClick}
          >
            Primary button
          </Button>
          <Button
            type="secondary"
            onClick={this.onButtonClick}
            outline
          >
            Secondary button
          </Button>
          {/* Small buttons */}
          <Button
            type="primary"
            size="xs"
            onClick={this.onButtonClick}
          >
            Primary small
          </Button>
          <Button
            type="secondary"
            size="xs"
            onClick={this.onButtonClick}
            outline
          >
            Secondary small
          </Button>
          <Button
            type="primary"
            onClick={this.onButtonClick}
            icon
          >
            <i className="fas fa-play"></i>
          </Button>
          {/* Icon buttons */}
          <Button
            type="secondary"
            onClick={this.onButtonClick}
            outline
            icon
          >
            <i className="fas fa-play"></i>
          </Button>
          <Button
            type="primary"
            size="xs"
            onClick={this.onButtonClick}
            fab
          >
            <i className="fas fa-pen"></i>
          </Button>
          {/* Fab buttons */}
          <Button
            type="secondary"
            size="xs"
            onClick={this.onButtonClick}
            outline
            fab
          >
            <i className="fas fa-pen"></i>
          </Button>
          { /* featured */}
          <Button
            type="primary"
            onClick={this.onButtonClick}
            featured
          >
            <i className="fas fa-heart"></i>
            <span>Add to favorites</span>
          </Button>
          <Button
            type="secondary"
            onClick={this.onButtonClick}
            outline
            featured
          >
            <i className="fas fa-heart"></i>
            <span>Add to favorites</span>
          </Button>
          <Button
            type="primary"
            size="xs"
            onClick={this.onButtonClick}
            featured
          >
            <i className="fas fa-link"></i>
            <span>Attach document</span>
          </Button>
          <Button
            type="secondary"
            size="xs"
            onClick={this.onButtonClick}
            outline
            featured
          >
            <i className="fas fa-unlink"></i>
            <span>Remove document</span>
          </Button>
        </section>
        <h1 className="h1">Inputs</h1>
        <section className="inputs-container">
          <Input
            placeholder="Enter a value"
            onChange={this.onInputChange}
          />
          <Input
            onChange={this.onInputChange}
            defaultText="Disabled input"
            disabled
          />
          <Input
            onChange={this.onInputChange}
            icon={<i className="fa fa-search" />}
            withIcon
          />
          <Input
            type="password"
            onChange={this.onInputChange}
            icon={<i className="fa fa-lock" />}
            defaultText="1234567890"
            withIcon
            valid
          />
          <Input
            type="email"
            onChange={this.onInputChange}
            icon={<i className="fa fa-at" />}
            defaultText="email@gmail.com"
            withIcon
            valid={false}
          />
        </section>
      </div>
    );
  }
}
