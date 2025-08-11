interface Props {
  className?: string;
}

const ArrowRightTopIcon = ({ className }: Props) => {
  return (
    <svg
      className={className}
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.60733 9.84476L9.85691 1.59518M9.85691 1.59518H1.60733M9.85691 1.59518V9.84476"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowRightTopIcon;
