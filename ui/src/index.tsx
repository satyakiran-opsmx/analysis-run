import * as React from "react";
import { useEffect, useState } from "react";

interface ApplicationResourceTree { }
interface State { status: any }

export const Extension = (props: {
  tree: ApplicationResourceTree;
  resource: State;
}) => {
  const [noReport, setReportStatus] = useState(false);
  const [appHealthData, setAppHealthData] = useState(null);
  useEffect(() => {
    let latestCanaryId = null;
    if (props.resource.status.metricResults && props.resource.status.metricResults.length) {
      latestCanaryId = props.resource.status.metricResults[props.resource.status.metricResults.length - 1]?.canaryId;
      console.log(latestCanaryId)
      if(!latestCanaryId){
        latestCanaryId = '1498'; //dummy canary to test
      }
    }
    if (latestCanaryId) {
      setReportStatus(true);
      let fetchStatusUrl = 'https://isd-dev.argo-dev.opsmx.net/gate/autopilot/canaries/getServiceList?canary' + latestCanaryId;
      fetch(fetchStatusUrl)
        .then(response => {
          return response.json();
        })
        .then((data: any) => {
          if (data) {
            console.log('getApplicationHealth');
            console.log(JSON.parse(data));
            setAppHealthData(JSON.parse(data))
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
  return <>
    {!noReport ? <h1>No Report Available</h1> :
      <div className="shopping-list">
        <h1>Shopping List</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
          <li>Facebook</li>
        </ul>
        {appHealthData && appHealthData.map(serviceNameInfo=>{
          return <>
                    <div className="summary-box-text">Metrics</div>
                    <div  className="summaryinnerbox mb-2 text-center d-flex">          
                      <div className="summarysmallbox summary-logmetric-firstbox flex-grow-1" >                           
                        <div className="summary-small-bottom" >{serviceNameInfo['metricScore']}</div>
                        <div className="summary-small-bottom" > - </div>            
                        <div className="summary-small-top" >Metrics</div> 
                      </div>
                      <div className="summarysmallbox flex-grow-1">              
                        <div className="summary-small-bottom darkred-box">{serviceNameInfo['metricsCount'] ? serviceNameInfo['metricsCount']['fail']:''} </div>            
                        <div className="summary-small-top darkred-box">Failed</div>
                      </div>
                      <div className="summarysmallbox flex-grow-1">              
                        <div className="summary-small-bottom darkred-box">{serviceNameInfo['metricsCount'] ? serviceNameInfo['metricsCount']['critical']:''}</div>            
                        <div className="summary-small-top darkred-box">Critical</div>
                      </div>
                      <div className="summarysmallbox flex-grow-1">              
                        <div className="summary-small-bottom lightyellow-box">{serviceNameInfo['metricsCount'] ? serviceNameInfo['metricsCount']['watchlist']:''}</div>            
                        <div className="summary-small-top lightyellow-box">Watchlist</div>
                      </div>
                      <div className="summarysmallbox flex-grow-1 border0">              
                        <div className="summary-small-bottom lightgreen-box">{serviceNameInfo['metricsCount'] ? serviceNameInfo['metricsCount']['total']:''}</div>            
                        <div className="summary-small-top lightgreen-box">Count</div>
                      </div>
                    </div>
                    </>
        })}
      </div>
    }
  </>
};

export const component = Extension;
