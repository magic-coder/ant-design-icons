import * as React from "react";

const Camera: React.SFC<object> = (props: object) => (
  <svg id="图层_1" viewBox="0 0 1024 1024" width="1em" height="1em" {...props}>
    <circle className="st0" cx={512} cy={544} r={96} />
    <path
      className="st0"
      d="M864 320H677.3l-17.1-47.8-22.9-64.2H386.7l-22.9 64.2-17.1 47.8H160c-4.4 0-8 3.6-8 8v456c0 4.4 3.6 8 8 8h704c4.4 0 8-3.6 8-8V328c0-4.4-3.6-8-8-8zM512 704c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160z"
    />
    <path d="M864 248H728l-32.4-90.8C691 144.5 679 136 665.4 136H358.6c-13.5 0-25.6 8.5-30.1 21.2L296 248H160c-44.2 0-80 35.8-80 80v456c0 44.2 35.8 80 80 80h704c44.2 0 80-35.8 80-80V328c0-44.2-35.8-80-80-80zm8 536c0 4.4-3.6 8-8 8H160c-4.4 0-8-3.6-8-8V328c0-4.4 3.6-8 8-8h186.7l17.1-47.8 22.9-64.2h250.5l22.9 64.2 17.1 47.8H864c4.4 0 8 3.6 8 8v456z" />
    <path d="M512 384c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160zm0 256c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z" />
  </svg>
);

Camera.displayName = "Camera";

export default Camera;
