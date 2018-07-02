import * as React from "react";

const AntGroup: React.SFC<object> = (props: object) => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" {...props}>
    <path d="M848.8 249c20.3-20.4 20.3-53.4 0-73.8s-53.1-20.4-73.4 0c-13.6 13.6-18 33-13.4 50.4l-128.6 91.3c-22.7-8.9-46.6-14.9-71.1-17.4L517.8 253c-3.2-3.3-8.4-3.3-11.6 0l-44.5 46.5c-34.1 4-66.4 13.5-95.3 27.8l41-160.2c25.2-3.7 44.6-25.2 44.6-51.3 0-28.6-23.4-51.9-52.2-51.9-28.8 0-52.2 23.2-52.2 51.9 0 17 8.2 32.1 20.9 41.5l-51.6 201.8C264.9 401.7 232 463.4 232 536c0 128.4 104.1 232.5 232.5 232.5h1.9c-20.2 10.4-36.3 27.4-45.6 48.1l-133.3-54c-11.1-4.5-23.6-3.2-33.6 3.3L201 800.8c-9.2 6.1-11.7 18.4-5.5 27.5 6.1 9.1 18.5 11.6 27.7 5.5l51.2-33.8L412 855.9v24.6c0 30.2 13.4 57.3 34.5 75.6 2.9 2.5 6.6 3.9 10.5 3.9h110c3.9 0 7.6-1.4 10.5-3.9 21.2-18.3 34.5-45.4 34.5-75.6v-23-1.6l137.8-55.8 51.2 33.8c9.2 6.1 21.6 3.6 27.7-5.5 6.1-9.1 3.6-21.4-5.5-27.5l-53-34.9c-10-6.6-22.5-7.8-33.6-3.3l-133.3 54c-9.3-20.8-25.5-37.8-45.6-48.1h1.9C687.9 768.5 792 664.4 792 536c0-85.7-48.9-157.3-117.8-198.9l112.2-79.6c19.8 11.4 45.5 8.6 62.4-8.5zM704 480c0 66.3-86 120-192 120s-192-53.7-192-120 86-120 192-120 192 53.7 192 120z" />
    <path
      d="M512 360c-106 0-192 53.7-192 120s86 120 192 120 192-53.7 192-120-86-120-192-120zm45 144h-94c-4.9 0-8.7-4.4-7.9-9.2 4.4-26.5 27.3-46.8 54.9-46.8s50.5 20.2 54.9 46.8c.8 4.8-3 9.2-7.9 9.2z"
      fill="#fff"
    />
    <path d="M510 448c-27.6 0-50.5 20.2-54.9 46.8-.8 4.8 3 9.2 7.9 9.2h94c4.9 0 8.7-4.4 7.9-9.2-4.4-26.6-27.3-46.8-54.9-46.8z" />
  </svg>
);

AntGroup.displayName = "AntGroup";

export default AntGroup;
