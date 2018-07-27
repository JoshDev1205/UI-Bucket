import React from 'react';
import Button from './components/button';

export default class App extends React.PureComponent {
  render() {
    return (
      <main className="container">
        { /* Primary buttons */ }
        <h1 className="h1">
          Normal buttons
        </h1>
        <section className="buttons">
          <Button>
            Primary button
          </Button>
          <Button type="secondary">
            Secondary button
          </Button>
          <Button size="xs">
            Primary small
          </Button>
          <Button
            type="secondary"
            size="xs"
          >
            Secondary small
          </Button>
        </section>
        { /* Outline buttons */ }
        <h1 className="h1">
          Outline buttons
        </h1>
        <section className="buttons">
          <Button outline>
            Primary button
          </Button>
          <Button
            type="secondary"
            outline
          >
            Secondary button
          </Button>
          <Button
            size="xs"
            outline
          >
            Primary small
          </Button>
          <Button
            size="xs"
            type="secondary"
            outline
          >
            Secondary small
          </Button>
        </section>
        { /* Icon buttons */ }
        <h1 className="h1">
          Icocn buttons
        </h1>
        <section className="buttons">
          <Button icon>
            <i className="fas fa-pen" />
          </Button>
          <Button
            type="secondary"
            fab
          >
            <i className="fa fa-bell" />
          </Button>
          <Button
            size="xs"
            outline
            fab
          >
            <i className="fab fa-edge" />
          </Button>
          <Button
            size="xs"
            type="secondary"
            outline
            icon
          >
            <i className="fa fa-heart" />
          </Button>
        </section>

        <h1 className="h1">
          Featured icons
        </h1>
        <section className="buttons">
          <Button featured>
            <i className="fas fa-map-marker-alt" />
            <span>
              See on maps
            </span>
          </Button>
          <Button
            type="secondary"
            featured
          >
            <i className="fas fa-link" />
            <span>
              Attach document
            </span>
          </Button>
          <Button
            size="xs"
            outline
            featured
          >
            <i className="fas fa-heart" />
            <span>
              Add to favorites
            </span>
          </Button>
          <Button
            type="secondary"
            size="xs"
            outline
            featured
          >
            <i className="fas fa-info-circle" />
            <span>
              More information
            </span>
          </Button>
        </section>
      </main>
    );
  }
}
