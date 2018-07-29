import React, { PureComponent } from 'react';
import Button from './button';
import Input from './input';

export default class App extends PureComponent<{}> {
  render() {
    return (
      <div className="container">
        <Button onClick={() => { console.log('click'); }}>
          Primary
        </Button>
        <Input onChange={(e, val) => { console.log(e, val); }} />
      </div>
    );
  }
}
