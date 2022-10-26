import * as React from "react";

interface ApplicationResourceTree {}
interface State {}

export const Extension = (props: {
  tree: ApplicationResourceTree;
  resource: State;
}) => {
  console.log(props);
  return (
    <div className="shopping-list">
      <h1>Shopping List</h1>
      <ul>
        <li>Instagram</li>
        <li>WhatsApp</li>
        <li>Oculus</li>
        <li>Facebook</li>
      </ul>
    </div>
  );
};

export const component = Extension;
