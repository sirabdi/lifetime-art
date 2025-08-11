interface Props {
  className?: string;
}

const MobileMenuIcon = ({ className }: Props) => {
  return (
    <svg
      width="41"
      height="21"
      fill="none"
      viewBox="0 0 41 21"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_2692)">
        <rect x="0.5" y="0.5" width="40" height="2" fill="white" />
        <rect x="0.5" y="9.5" width="40" height="2" fill="white" />
        <rect x="0.5" y="18.5" width="40" height="2" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_1_2692">
          <rect
            width="40"
            height="20"
            fill="white"
            transform="translate(0.5 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MobileMenuIcon;
