import * as React from "react";

interface ApplicationResourceTree { }
interface State { }

export const Extension = (props: {
  tree: ApplicationResourceTree;
  resource: State;
}) => {
  console.log("props: ",props);
  return (
    <div className="shopping-list">
      <iframe src="https://isd.argo.ninja-test.opsmx.org/ui/application" style={{width: "100%", height: "100vh"}}></iframe>
    </div>
  );
};

export const component = Extension;
