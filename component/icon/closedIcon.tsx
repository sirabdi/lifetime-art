interface Props {
  className?: string;
}

const ClosedIcon = ({ className }: Props) => {
  return (
    <svg
      width="40"
      height="29"
      fill="none"
      viewBox="0 0 40 29"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5.32129"
        y="0.87822"
        width="40"
        height="2"
        transform="rotate(40 5.32129 0.87822)"
        fill="white"
      />
      <rect
        x="3.80957"
        y="26.9009"
        width="40"
        height="2"
        transform="rotate(-40 3.80957 26.9009)"
        fill="white"
      />
    </svg>
  );
};

export default ClosedIcon;
