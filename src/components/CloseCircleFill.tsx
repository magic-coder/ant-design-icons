import * as React from "react";

const CloseCircleFill: React.SFC<object> = (props: object) => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" {...props}>
    <path
      d="M553.5 514l129.9-154.9c1.2-1.5 1.9-3.3 1.9-5.2 0-4.5-3.6-8-8-8l-66 .3L512 464.6l-99.3-118.5-66.1-.3c-4.4 0-8 3.6-8 8 0 1.9.7 3.7 1.9 5.2l130.1 154.9-130.1 155c-1.2 1.5-1.9 3.3-1.9 5.2 0 4.5 3.6 8 8 8l66.1-.3L512 563.4l99.4 118.5 66 .3c4.4 0 8-3.6 8-8 0-1.9-.7-3.7-1.9-5.2l-130-155z"
      fill="currentColor"
    />
    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359c-1.2-1.5-1.9-3.3-1.9-5.2 0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" />
  </svg>
);

CloseCircleFill.displayName = "CloseCircleFill";

export default CloseCircleFill;
