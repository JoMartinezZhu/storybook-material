import { configure } from "@storybook/react";

const req = require.context("../src/stories", true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => {
    return req(filename);
  });
}

configure(loadStories, module);
