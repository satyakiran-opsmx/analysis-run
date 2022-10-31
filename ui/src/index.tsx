import * as React from "react";
import { useEffect, useState } from "react";

interface ApplicationResourceTree { }
interface State { status: any }

export const Extension = (props: {
  tree: ApplicationResourceTree;
  resource: State;
}) => {
  const [noReport, setReportStatus] = useState(false);
  useEffect(() => {
    let latestCanaryId = null;
    if (latestCanaryId) {
      setReportStatus(true);
      if (props.resource.status.metricResults && props.resource.status.metricResults.length) {
        latestCanaryId = props.resource.status.metricResults[props.resource.status.metricResults.length - 1];
      }
      let fetchStatusUrl = 'https://isd-dev.argo-dev.opsmx.net/gate/autopilot/api/v2/applications/getApplicationHealth?canaryId=' + latestCanaryId;
      fetch(fetchStatusUrl)
        .then(response => {
          return response.json();
        })
        .then((data: any) => {
          if (data) {
            console.log('getApplicationHealth');
            console.log(JSON.parse(data));
          }
        }).catch(err => {
          console.error('res.data', err)
        });
    }
    else {
      setReportStatus(false)
    }
  }, [])

  console.log("props: ", props);
  return (
    <div className="shopping-list">
      {!noReport && <h1>No Report</h1>}
      <h1>Shopping List</h1>
      <ul>
        <li>Instagram</li>
        <li>WhatsApp</li>
        <li>Oculus</li>
        <li>Facebook</li>
      </ul>
    </div>
}
  ) 
};

export const component = Extension;
