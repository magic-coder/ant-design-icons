import * as React from "react";

const StopFill: React.SFC<object> = (props: object) => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" {...props}>
    <path
      d="M223.5 277.2l523.3 523.3c19.7-16 37.7-34.1 53.7-53.7L277.2 223.5c-19.7 16-37.7 34-53.7 53.7z"
      fill="currentColor"
    />
    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm234.8 736.5L223.5 277.2c16-19.7 34-37.7 53.7-53.7l523.3 523.3c-16 19.6-34 37.7-53.7 53.7z" />
  </svg>
);

StopFill.displayName = "StopFill";

export default StopFill;
