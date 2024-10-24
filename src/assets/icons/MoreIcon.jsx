import * as React from "react";
const MoreIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={14}
    fill="none"
    {...props}
  >
    <g stroke="#00486D" strokeLinecap="round" clipPath="url(#a)">
      <path strokeLinejoin="round" d="M12.657 1.343 18.314 7l-5.657 5.657" />
      <path d="M17.97 7H1" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h19v14H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default MoreIcon;
