/**
 * Copyright (c) 2019 pling-kit contributors.
 * @license MIT LICENSE
 * https://github.com/pling-kit/p-hello
 */

import React from 'react';

const Hello = toWhoName => (
  <div className="hello-container">
    <h1>Hello {' '} { toWhoName }!</h1>

    <style jsx>
      {`
      .hello-container {
        margin: auto;
        padding: 20px;
      }
    `}

    </style>
  </div>
);

export default Hello;
