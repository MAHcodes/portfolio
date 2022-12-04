const Strapi = ({ fill, ...props }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 600 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M414 182H212V285H315V388H418V186C418 183.791 416.209 182 414 182Z"
      fill="white"
      className={fill}
    />
    <rect x="311" y="285" width="4" height="4" fill="white" />
    <path
      d="M212 285H311C313.209 285 315 286.791 315 289V388H216C213.791 388 212 386.209 212 384V285Z"
      fill="#9593FF"
      className={`${fill} opacity-80`}
    />
    <path
      d="M315 388H418L318.414 487.586C317.154 488.846 315 487.953 315 486.172V388Z"
      fill="#9593FF"
      className={`${fill} opacity-80`}
    />
    <path
      d="M212 285H113.828C112.046 285 111.154 282.846 112.414 281.586L212 182V285Z"
      fill="#9593FF"
      className={`${fill} opacity-80`}
    />
  </svg>
);

export default Strapi;
