import * as React from "react";

interface ApplicationResourceTree { }
interface State { status: any }

export const Extension = (props: {
  tree: ApplicationResourceTree;
  resource: State;
}) => {
 
  return (
    <div className="shopping-list">
      <iframe src="http://localhost:4200/plugin-isd/verification/final-tests/1498/fromPlugin/200" ></iframe>
    </div>
  );
};

export const component = Extension;
