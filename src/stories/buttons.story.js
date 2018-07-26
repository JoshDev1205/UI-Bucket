import React from 'react';
import '../index';
import { storiesOf } from '@storybook/react';
import Prism from '@maji/react-prism'

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
        <mate-button type="primary">Primary button</mate-button>
        <mate-button type="secondary">Secondary button</mate-button>
        <mate-button type="primary" size="xs">Primary small</mate-button>
        <mate-button type="secondary" size="xs">Secondary small</mate-button>
      `}
      </Prism>
      <label className="label">Result:</label>
      <section className="buttons-container">
        <mate-button type="primary">Primary button</mate-button>
        <mate-button type="secondary">Secondary button</mate-button>
        <mate-button type="primary" size="xs">Primary small</mate-button>
        <mate-button type="secondary" size="xs">Secondary small</mate-button>
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
        <mate-button type="primary" outline>Primary outlined</mate-button>
        <mate-button type="secondary" outline>Secondary outlined</mate-button>
        <mate-button type="primary" size="xs" outline>Primary small</mate-button>
        <mate-button type="secondary" size="xs" outline>Secondary small</mate-button>
      `}
      </Prism>
      <label className="label">Result:</label>
      <section className="buttons-container">
        <mate-button
          type="primary"
          outline
        >
          Primary outlined
        </mate-button>
        <mate-button
          type="secondary"
          outline
        >
          Secondary outlined
        </mate-button>
        <mate-button
          type="primary"
          size="xs"
          outline
        >
          Primary small
        </mate-button>
        <mate-button
          type="secondary"
          size="xs"
          outline
        >
          Secondary small
        </mate-button>
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
        <mate-button type="primary" fab>
          <i className="fas fa-pen"></i>
        </mate-button>

        <mate-button type="secondary" icon>
          <i className="fab fa-edge"></i>
        </mate-button>

        <mate-button type="primary" size="xs" fab outline>
          <i className="far fa-bell"></i>
        </mate-button>

        <mate-button type="secondary" size="xs" icon outline>
          <i className="far fa-heart"></i>
        </mate-button>
      `}
      </Prism>
      <label className="label">Result:</label>
      <section className="buttons-container">
        <mate-button
          type="primary"
          fab
        >
          <i className="fas fa-pen"></i>
        </mate-button>
        <mate-button
          type="secondary"
          icon
        >
          <i className="fab fa-edge"></i>
        </mate-button>
        <mate-button
          type="primary"
          size="xs"
          fab
          outline
        >
          <i className="far fa-bell"></i>
        </mate-button>
        <mate-button
          type="secondary"
          size="xs"
          icon
          outline
        >
          <div className="far fa-heart"></div>
        </mate-button>
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

        <mate-button type="primary" featured>
          <i className="fas fa-map-marker-alt"></i>
          <span>See on maps</span>
        </mate-button>

        <mate-button type="secondary" featured>
          <i className="fas fa-link"></i>
          <span>Attach document</span>
        </mate-button>

        <mate-button type="primary" size="xs" outline featured>
          <i className="fas fa-heart"></i>
          <span>Add to favorites</span>
        </mate-button>

        <mate-button type="secondary" size="xs" outline featured>
          <i className="fas fa-info-circle"></i>
          <span>More information</span>
        </mate-button>
      `}
      </Prism>
      <span className="label">Result:</span>
      <div className="buttons-container">
        <mate-button
          type="primary"
          featured
        >
          <i className="fas fa-map-marker-alt"></i>
          <span>See on maps</span>
        </mate-button>
        <mate-button
          type="secondary"
          featured
        >
          <i className="fas fa-link"></i>
          <span>Attach document</span>
        </mate-button>
        <mate-button
          type="primary"
          size="xs"
          outline
          featured
        >
          <i className="fas fa-heart"></i>
          <span>Add to favorites</span>
        </mate-button>
        <mate-button
          type="secondary"
          size="xs"
          outline
          featured
        >
          <i className="fas fa-info-circle"></i>
          <span>More information</span>
        </mate-button>
      </div>
    </main>
  ))
