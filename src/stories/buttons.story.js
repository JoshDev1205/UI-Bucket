import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Prism from '@maji/react-prism';
import { Button } from '@belatrix/mate/dist/main';

storiesOf('Button', module)
  .add('Basics', () => (
    <main className="container">
      <h1 className="title">Basic buttons</h1>
      <p className="description">
        The basic buttons should be used for primary actions. The dominant
        color is orange, but. If you are using then already you would want
        use the outline ones to not saturate the UI.
      </p>
      <label className="label">Code:</label>
      <Prism language="javascript">
      {`
        <Button type="primary">Primary button</Button>
        <Button type="secondary">Secondary button</Button>
        <Button type="primary" size="xs">Primary small</Button>
        <Button type="secondary" size="xs">Secondary small</Button>
      `}
      </Prism>
      <label className="label">Result:</label>
      <section className="buttons-container">
        <Button
          type="primary"
          onClick={action('button-click')}
        >
          Primary button
        </Button>
        <Button
          type="secondary"
          onClick={action('button-click')}
        >
          Secondary button
        </Button>
        <Button
          type="primary"
          size="xs"
          onClick={action('button-click')}
        >
          Primary small
        </Button>
        <Button
          type="secondary"
          size="xs"
          onClick={action('button-click')}
        >
          Secondary small
        </Button>
      </section>
    </main>
  ))
  .add('Outlined', () => (
    <main className="container">
      <h1 className="title">Outlined buttons</h1>
      <p className="description">
        This buttons are alternatives to basic buttons. Generally, you
        would want to use them when you have a colored background and
        dont want to saturate the UI with the fill-background buttons.
      </p>
      <label className="label">Code:</label>
      <Prism language="javascript">
      {`
        <Button type="primary" outline>Primary outlined</Button>
        <Button type="secondary" outline>Secondary outlined</Button>
        <Button type="primary" size="xs" outline>Primary small</Button>
        <Button type="secondary" size="xs" outline>Secondary small</Button>
      `}
      </Prism>
      <label className="label">Result:</label>
      <section className="buttons-container">
        <Button
          type="primary"
          outline
          onClick={action('button-click')}
        >
          Primary outlined
        </Button>
        <Button
          type="secondary"
          outline
          onClick={action('button-click')}
        >
          Secondary outlined
        </Button>
        <Button
          type="primary"
          size="xs"
          outline
          onClick={action('button-click')}
        >
          Primary small
        </Button>
        <Button
          type="secondary"
          size="xs"
          outline
          onClick={action('button-click')}
        >
          Secondary small
        </Button>
      </section>
    </main>
  ))
  .add('Icons', () => (
    <main className="container">
      <h1 className="title">Icon buttons</h1>
      <p className="description">
        Use this buttons as shortcuts for actions or when you dont have
        enough space on the screen. For example, you can use this buttons
        for edit/remove or mark an item as favorite.
      </p>
      <label className="label">Code:</label>
      <Prism language="javascript">
      {`
        <Button type="primary" fab>
          <i className="fas fa-pen"></i>
        </Button>

        <Button type="secondary" icon>
          <i className="fab fa-edge"></i>
        </Button>

        <Button type="primary" size="xs" fab outline>
          <i className="far fa-bell"></i>
        </Button>

        <Button type="secondary" size="xs" icon outline>
          <i className="far fa-heart"></i>
        </Button>
      `}
      </Prism>
      <label className="label">Result:</label>
      <section className="buttons-container">
        <Button
          type="primary"
          fab
          onClick={action('button-click')}
        >
          <i className="fas fa-pen"></i>
        </Button>
        <Button
          type="secondary"
          icon
          onClick={action('button-click')}
        >
          <i className="fab fa-edge"></i>
        </Button>
        <Button
          type="primary"
          size="xs"
          fab
          outline
          onClick={action('button-click')}
        >
          <i className="far fa-bell"></i>
        </Button>
        <Button
          type="secondary"
          size="xs"
          icon
          outline
          onClick={action('button-click')}
        >
          <div className="far fa-heart"></div>
        </Button>
      </section>
    </main>
  ))
  .add('Featured', () => (
    <main className="container">
      <h1 className="title">
        Featured buttons
      </h1>
      <p className="description">
        Use this buttons when you need to indicate an action with an important message. These buttons
        can be mixed with the icon-only buttons for responsive apps.
      </p>
      <label className="label">Code:</label>
      <Prism language="javascript">
      {`

        <Button type="primary" featured>
          <i className="fas fa-map-marker-alt"></i>
          <span>See on maps</span>
        </Button>

        <Button type="secondary" featured>
          <i className="fas fa-link"></i>
          <span>Attach document</span>
        </Button>

        <Button type="primary" size="xs" outline featured>
          <i className="fas fa-heart"></i>
          <span>Add to favorites</span>
        </Button>

        <Button type="secondary" size="xs" outline featured>
          <i className="fas fa-info-circle"></i>
          <span>More information</span>
        </Button>
      `}
      </Prism>
      <span className="label">Result:</span>
      <div className="buttons-container">
        <Button
          type="primary"
          featured
          onClick={action('button-click')}
        >
          <i className="fas fa-map-marker-alt"></i>
          <span>See on maps</span>
        </Button>
        <Button
          type="secondary"
          featured
          onClick={action('button-click')}
        >
          <i className="fas fa-link"></i>
          <span>Attach document</span>
        </Button>
        <Button
          type="primary"
          size="xs"
          outline
          featured
          onClick={action('button-click')}
        >
          <i className="fas fa-heart"></i>
          <span>Add to favorites</span>
        </Button>
        <Button
          type="secondary"
          size="xs"
          outline
          featured
          onClick={action('button-click')}
        >
          <i className="fas fa-info-circle"></i>
          <span>More information</span>
        </Button>
      </div>
    </main>
  ));
