import * as React from "react";
import { useEffect, useState } from "react";

interface ApplicationResourceTree { }
interface State { status: any }

export const Extension = (props: {
  tree: ApplicationResourceTree;
  resource: State;
}) => {
  useEffect(()=>{
    window.top.postMessage('I am Iframe', '*')
  },[])
 
  return (
    <div className="shopping-list">
      <h1>Shopping List</h1>
      <ul>
        <li>Instagram</li>
        <li>WhatsApp</li>
        <li>Oculus</li>
        <li>Facebook</li>
      </ul>
      <iframe src="http://localhost:4200/argocontext/final-tests/121/argorollout.argo-dev.opsmx.net/deploymentverification/final-tests/1498/206?argoRollout=true" className="myIframe"></iframe>
    </div>
  );
};

export const component = Extension;
