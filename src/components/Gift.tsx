import * as React from "react";

const Gift: React.SFC<object> = (props: object) => (
  <svg id="图层_1" viewBox="0 0 1024 1024" width="1em" height="1em" {...props}>
    <path
      className="st0"
      d="M408 306h70v-70c0-38.6-31.4-70-70-70s-70 31.4-70 70 31.4 70 70 70zM228 550h250v308H228zM228 482h250V378H180v104h44zM686 236c0-38.6-31.4-70-70-70s-70 31.4-70 70v70h70c38.6 0 70-31.4 70-70zM546 550h250v308H546zM546 482h298V378H546z"
    />
    <path d="M880 310H732.4c13.6-21.4 21.6-46.8 21.6-74 0-76.1-61.9-138-138-138-41.4 0-78.7 18.4-104 47.4-25.3-29-62.6-47.4-104-47.4-76.1 0-138 61.9-138 138 0 27.2 7.9 52.6 21.6 74H144c-17.7 0-32 14.3-32 32v200c0 4.4 3.6 8 8 8h40v344c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V550h40c4.4 0 8-3.6 8-8V342c0-17.7-14.3-32-32-32zm-334-74c0-38.6 31.4-70 70-70s70 31.4 70 70-31.4 70-70 70h-70v-70zm-138-70c38.6 0 70 31.4 70 70v70h-70c-38.6 0-70-31.4-70-70s31.4-70 70-70zM180 482V378h298v104H180zm48 68h250v308H228V550zm568 308H546V550h250v308zm48-376H546V378h298v104z" />
  </svg>
);

Gift.displayName = "Gift";

export default Gift;
