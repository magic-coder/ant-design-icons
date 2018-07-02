import * as React from "react";

const HighlightFill: React.SFC<object> = (props: object) => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" {...props}>
    <path d="M957.6 507.4L603.2 158.2c-3.1-3.1-8.1-3.1-11.2 0L353.3 393.4c-3.1 3.1-3.2 8.2-.1 11.3l.1.1 40 39.4-117.2 115.3c-3.1 3.1-3.2 8.2-.1 11.3l.1.1 39.5 38.9-189.1 187H72.1c-4.4 0-8.1 3.6-8.1 8V860c0 4.4 3.6 8 8 8h344.9c2.1 0 4.1-.8 5.6-2.3l76.1-75.6 40.4 39.8c3.1 3.1 8.1 3.1 11.2 0l117.1-115.6 40.1 39.5c3.1 3.1 8.1 3.1 11.2 0l238.7-235.2c3.4-3 3.4-8 .3-11.2z" />
  </svg>
);

HighlightFill.displayName = "HighlightFill";

export default HighlightFill;
