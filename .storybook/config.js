/**
 * Copyright (c) 2019 pling-kit contributors.
 * @license MIT LICENSE
 * https://github.com/pling-kit/p-hello
 */

import { configure } from '@storybook/react';

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
