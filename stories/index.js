/**
 * Copyright (c) 2019 pling-kit contributors.
 * @license MIT LICENSE
 * https://github.com/pling-kit/p-hello
 */

const React = require('react');
const { storiesOf } = require('@storybook/react');
const { component } = require('../src/component');

// Load CSS
require('../dist/style.css');

// Load Web Component
require('file-loader?name=component.html!../dist/component.html'); // eslint-disable-line

// Import Web component in page
const link = document.createElement('link');

link.rel = 'import';
link.href = 'component.html';
document.head.appendChild(link);

const PHello = component(React.createElement);

storiesOf('CSS component', module)
  .add('default', () => (
    <div className="p-hello">
      <h1 className="p-hello__title">
        Hello guest!
      </h1>
    </div>
  ));

storiesOf('Stateless functional component', module)
  .add('default', () => (
    <PHello toWhoName="myName" />
  ));

storiesOf('Web component', module)
  .add('default', () => (
    <p-hello toWhoName="myName" />
  ));
