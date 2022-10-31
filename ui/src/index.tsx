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
      <iframe src="https://isd-dev.argo-dev.opsmx.net/ui/plugin-isd/verification/final-tests/1498/fromPlugin/200" style={{width: "100%", height: "100vh"}}></iframe>
    </div>
  );
};

export const component = Extension;
