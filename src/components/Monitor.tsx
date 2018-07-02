import * as React from "react";

const Monitor: React.SFC<object> = (props: object) => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" {...props}>
    <path
      d="M769.2 254.8C726.2 211.7 668.9 188 608 188s-118.2 23.7-161.2 66.8C403.7 297.8 380 355.1 380 416s23.7 118.2 66.8 161.2c43 43.1 100.3 66.8 161.2 66.8s118.2-23.7 161.2-66.8c43.1-43 66.8-100.3 66.8-161.2s-23.7-118.2-66.8-161.2zm-13.7 251.1l-37.9 29.6c-3.5 2.7-8.5 2.1-11.2-1.4l-64.1-82-50.4 39.3c-3.5 2.7-8.5 2.1-11.2-1.4L546 445.8l.2-.1-70.5-90.2c-2.7-3.5-2.1-8.5 1.4-11.2l37.9-29.7c3.5-2.7 8.5-2.1 11.2 1.4l70.5 90.2 50.4-39.3c3.5-2.7 8.5-2.1 11.2 1.4l34.6 44.3-.2.2 64.1 82c2.8 3.4 2.2 8.4-1.3 11.1z"
      fill="currentColor"
    />
    <path d="M692.8 412.7l.2-.2-34.6-44.3c-2.7-3.5-7.7-4.1-11.2-1.4l-50.4 39.3-70.5-90.1c-2.7-3.5-7.7-4.1-11.2-1.4l-37.9 29.7c-3.5 2.7-4.1 7.7-1.4 11.2l70.5 90.2-.2.1 34.6 44.3c2.7 3.5 7.7 4.1 11.2 1.4l50.4-39.3 64.1 82c2.7 3.5 7.7 4.1 11.2 1.4l37.9-29.6c3.5-2.7 4.1-7.7 1.4-11.2l-64.1-82.1z" />
    <path d="M608 112c-167.9 0-304 136.1-304 304 0 70.3 23.9 135 63.9 186.5L114.3 856.1c-3.1 3.1-3.1 8.2 0 11.3l42.3 42.3c3.1 3.1 8.2 3.1 11.3 0l253.6-253.6C473 696.1 537.7 720 608 720c167.9 0 304-136.1 304-304S775.9 112 608 112zm161.2 465.2C726.2 620.3 668.9 644 608 644s-118.2-23.7-161.2-66.8C403.7 534.2 380 476.9 380 416s23.7-118.2 66.8-161.2c43-43.1 100.3-66.8 161.2-66.8s118.2 23.7 161.2 66.8c43.1 43 66.8 100.3 66.8 161.2s-23.7 118.2-66.8 161.2z" />
  </svg>
);

Monitor.displayName = "Monitor";

export default Monitor;
