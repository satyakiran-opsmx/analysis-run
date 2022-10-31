import * as React from "react";
import { useEffect } from "react";

interface ApplicationResourceTree { }
interface State { }

export const Extension = (props: {
  tree: ApplicationResourceTree;
  resource: State;
}) => {
  useEffect(() => {
    let latestCanary = '/dashboardservice/v2/users/' + `user2` + '/applications/latest-canary';
    fetch(latestCanary)
      .then((data: any) => {
        if (data) {
          console.log('latest-canary');
          console.log(JSON.parse(data));
          let fetchStatusUrl = '/api/v2/applications/getApplicationHealth?canaryId=' + data.canaryId;
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
      }).catch(err => {
        console.error('res.data', err)
      });
  })

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
    </div>
  );
};

export const component = Extension;
