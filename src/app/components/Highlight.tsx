type HighlightProps = {
  children: React.ReactNode;
};

const Highlight = ({ children }: HighlightProps) => {
  return (
    <span className="font-bold bg-gradient-to-r from-blueOne via-blueTwo to-blueThree bg-clip-text textFill--transparent">
      {children}
    </span>
  );
};

export default Highlight;
