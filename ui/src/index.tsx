import * as React from "react";
import { useEffect } from "react";

interface ApplicationResourceTree { }
interface State { }

export const Extension = (props: {
  tree: ApplicationResourceTree;
  resource: State;
}) => {
  console.log("props: ",props);
  return (
    <div className="shopping-list">
      <h1>Shopping List</h1>
      <ul>
        <li>Instagram</li>
        <li>WhatsApp</li>
        <li>Oculus</li>
        <li>Facebook</li>
      </ul>
      <iframe src="https://isd-dev.argo-dev.opsmx.net/ui/setup/cdintegration"></iframe>
    </div>
  );
};

export const component = Extension;
