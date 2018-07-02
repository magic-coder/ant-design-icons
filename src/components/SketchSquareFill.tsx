import * as React from "react";

const SketchSquareFill: React.SFC<object> = (props: object) => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" {...props}>
    <path
      d="M658.3 261.9c-1-1.2-2.4-1.9-4-1.9H369.7c-1.6 0-3 .7-4 1.9L225.1 437.5c-1.6 1.9-1.5 4.7.2 6.6l282.9 318.1c1 1.1 2.4 1.7 3.8 1.7s2.8-.6 3.8-1.7l282.9-318.1c1.7-1.9 1.7-4.7.2-6.6L658.3 261.9zm-54.6 39.2l23.1 89.7-88.8-89.7h65.7zm4.5 122.2H415.8l96.2-97.2 96.2 97.2zM420.3 301.1H486l-88.8 89.7 23.1-89.7zm-39 7.1l-29.6 115.1h-62.5l92.1-115.1zm-87.5 151.1h63.4l84.5 166.3-147.9-166.3zM512 684.5L397.6 459.3h228.8L512 684.5zm70.3-58.9l84.5-166.3h63.4L582.3 625.6zm90-202.3l-29.6-115.1 92.1 115.1h-62.5z"
      fill="currentColor"
    />
    <path d="M608.2 423.3L512 326.1l-96.2 97.2zM582.3 625.6l147.9-166.3h-63.4zM672.3 423.3h62.5l-92.1-115.1z" />
    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-81.3 332.2L515.8 762.3c-1 1.1-2.4 1.7-3.8 1.7s-2.8-.6-3.8-1.7L225.3 444.2c-1.7-1.9-1.7-4.7-.2-6.6L365.6 262c1-1.2 2.4-1.9 4-1.9h284.6c1.6 0 3 .7 4 1.9l140.5 175.6c1.7 1.9 1.7 4.7 0 6.6z" />
    <path d="M397.6 459.3L512 684.5l114.4-225.2zM381.3 308.2l-92.1 115.1h62.5zM293.8 459.3l147.9 166.3-84.5-166.3zM420.3 301.1l-23.1 89.8 88.8-89.8zM603.7 301.1H538l88.8 89.8z" />
  </svg>
);

SketchSquareFill.displayName = "SketchSquareFill";

export default SketchSquareFill;
