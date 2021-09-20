import React, { useEffect, useState } from 'react';
import fuzzysearch from 'fuzzysearch';

interface TimeMachineProps {
  width?: number | string;
  height?: number | string;
}

interface DeployLinks {
  permalink: string | null; // 'https://61339abfd48ede0007fd3030--stupefied-curie-5a6706.netlify.app',
  alias: string | null; // 'https://www.matthewclarke.dev',
  branch: string | null; // null
}

interface Deploy {
  admin_url: string; // "https://app.netlify.com/sites/stupefied-curie-5a6706"
  available_functions: []; // []
  branch: string; // "main"
  build_id: string; // "61339abfd48ede0007fd302e"
  commit_ref: string; // "6f19e72df1b3d007c4c8aca207a3eb736360fcc8"
  commit_url: string; // "https://github.com/mclarkestudio/1033.dev/commit/6f19e72df1b3d007c4c8aca207a3eb736360fcc8"
  committer: string; // "mclarkestudio"
  context: string; // "production"
  created_at: string; // "2021-09-04T16:11:43.594Z"
  deploy_ssl_url: string; // "https://main--stupefied-curie-5a6706.netlify.app"
  deploy_time: number; // 40
  deploy_url: string; //"http://main--stupefied-curie-5a6706.netlify.app"
  entry_path: string | null; // null
  error_message: string | null; // null
  file_tracking_optimization: boolean; // true
  framework: string | null; //  "next"
  has_edge_handlers: boolean; // false
  id: string; //"61339abfd48ede0007fd3030"
  links: DeployLinks;
  locked: null;
  // log_access_attributes: {type: 'firebase', url: 'https://netlify-builds5.firebaseio.com/builds/61339abfd48ede0007fd302e/log', endpoint: 'https://netlify-builds5.firebaseio.com', path: '/builds/61339abfd48ede0007fd302e/log', token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2IjowLCJpY…iIn19.ktfCmcuWbBprIsrQz2HbEeN5fEKSvXCUjG47w1slY9s'}
  // manual_deploy: false
  // name: "stupefied-curie-5a6706"
  // plugin_state: "success"
  published_at: string; // "2021-09-04T16:12:26.020Z"
  // required: []
  // required_functions: []
  // review_id: null
  // review_url: null
  screenshot_url: 'https://d33wubrfki0l68.cloudfront.net/61339abfd48ede0007fd3030/screenshot_2021-09-04-16-12-26-0000.png';
  // site_capabilities: {title: 'Netlify Team Free', asset_acceleration: true, form_processing: true, cdn_propagation: 'partial', build_node_pool: 'buildbot-external-ssd', …}
  // site_id: "c9d95c92-716c-4b0b-b468-94f7892589c1"
  // skipped: null
  // skipped_log: null
  // ssl_url: "https://www.matthewclarke.dev"
  state: 'ready';
  title: 'chore(ci): fix cache upload';
  updated_at: '2021-09-04T16:12:29.597Z';
  // url: "https://www.matthewclarke.dev"
  // user_id: "5cbb8d94e24cdfd3678dab14"
}

export default function TimeMachine({
  width = 360,
  height = 722,
}: TimeMachineProps) {
  const [deploys, setDeploys] = useState(undefined);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    const site_id = 'c9d95c92-716c-4b0b-b468-94f7892589c1';
    const url = `https://api.netlify.com/api/v1/sites/${site_id}/deploys`;
    const token = 'uZVkGcSq1FYEA6t_aQWY6vaCJB-3HTp143wQdKaBWF8';

    fetch(url, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    })
      .then((body) => body.json())
      .then((data) => setDeploys(data))
      .catch((err) => setError(err));
  }, []);

  return (
    <pre>
      {error && (
        <p className="text-red-700">{JSON.stringify(error, null, 2)}</p>
      )}
      {deploys?.map((deploy: Deploy, index) => {
        const isChore = deploy?.title
          ? fuzzysearch('chore:', deploy?.title)
          : false;

        const isFeat = deploy?.title
          ? fuzzysearch('feat:', deploy?.title)
          : false;

        const isFix = deploy?.title
          ? fuzzysearch('fix:', deploy?.title)
          : false;

        const makeColor = () => {
          if (isChore) {
            return 'gray';
          }
          if (isFeat) {
            return 'limegreen';
          }
          if (isFix) {
            return 'lightblue';
          }
        };
        return (
          <div key={deploy.id} className="group relative cursor-pointer">
            <p>
              <span style={{ color: makeColor() }}>{deploy.title}</span>
            </p>
            <div
              style={{ right: 700 }}
              className="text-black opacity-0 group-hover:opacity-100 absolute w-1/2 "
            >
              <img
                className="rounded-xl shadow-2xl absolute"
                src={
                  deploy?.screenshot_url
                    ? deploy?.screenshot_url
                    : deploys[index + 1]?.screenshot_url
                }
                height="100"
              />
            </div>
          </div>
        );
      })}
    </pre>
  );
}
