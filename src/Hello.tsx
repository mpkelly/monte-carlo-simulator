import * as React from "react";
import {H1} from "react-style-helpers";

interface HelloProps {
  name: string;
}

class Hello extends React.Component<HelloProps, {}> {
  render() {
    return (
      <div>
        <H1>Hello {this.props.name}</H1>
      </div>
    )
  }
}

export default Hello;
