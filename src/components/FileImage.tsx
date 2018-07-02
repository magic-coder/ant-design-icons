import * as React from "react";

const FileImage: React.SFC<object> = (props: object) => (
  <svg id="图层_1" viewBox="0 0 1024 1024" width="1em" height="1em" {...props}>
    <path className="st0" d="M602 326h188.2L602 137.8z" />
    <path
      className="st0"
      d="M534 352V136H232v752h560V394H576c-23.2 0-42-18.8-42-42zm-134 50c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm296 294H328c-6.7 0-10.4-7.7-6.3-12.9l99.8-127.2c3.2-4.1 9.4-4.1 12.6 0l41.1 52.4 77.8-99.2c3.2-4.1 9.4-4.1 12.6 0l136.5 174c4.3 5.2.5 12.9-6.1 12.9z"
    />
    <path d="M553.1 509.1l-77.8 99.2-41.1-52.4c-3.2-4.1-9.4-4.1-12.6 0l-99.8 127.2c-4.1 5.2-.4 12.9 6.3 12.9H696c6.7 0 10.4-7.7 6.3-12.9l-136.5-174c-3.3-4.1-9.5-4.1-12.7 0z" />
    <circle cx={400} cy={442} r={40} />
    <path d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216c0 23.2 18.8 42 42 42h216v494z" />
  </svg>
);

FileImage.displayName = "FileImage";

export default FileImage;
