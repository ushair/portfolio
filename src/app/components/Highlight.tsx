type HighlightProps = {
  children: React.ReactNode;
  className?: string;
};

const Highlight = ({ children, className }: HighlightProps) => {
  return (
    <span
      className={`${className} font-bold bg-gradient-to-r from-blueOne via-blueTwo to-blueThree bg-clip-text textFill--transparent`}
    >
      {children}
    </span>
  );
};

export default Highlight;
