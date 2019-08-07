import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import Button from "../components/Button";

addDecorator(withInfo);

storiesOf("Button", module)
  .add("基本用法", () => <Button>hello world</Button>)

  .add("with some emoji", () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
