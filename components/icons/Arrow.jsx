const Arrow = ({ stroke, ...props }) => (
  <svg
    width="144"
    height="163"
    viewBox="0 0 144 163"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.0136 28.4874C15.7424 27.2533 52.0151 23.3141 57.9635 41.9232C60.4386 49.6664 59.4506 61.6978 54.3135 68.484C43.2816 83.0573 16.275 74.794 31.9454 56.4407C40.7337 46.1478 57.7355 48.0309 69.7563 49.5301C87.4758 51.7401 98.4852 62.3912 109.159 75.6901C114.579 82.444 132.49 119.255 129.892 118.724"
      stroke="#1C1C1C"
      strokeWidth="5"
      strokeLinecap="round"
      className={stroke}
    />
    <path
      d="M138.255 131.391C135.601 130.75 115.443 125.193 117.813 126.193C120.917 127.502 124.253 128.532 127.174 130.219C130.63 132.214 134.535 133.307 137.745 135.668C140.562 137.741 139.999 119.353 139.165 116.239"
      stroke="#1C1C1C"
      strokeWidth="5"
      strokeLinecap="round"
      className={stroke}
    />
  </svg>
);

export default Arrow;