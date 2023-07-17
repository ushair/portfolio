const FallbackSpinner = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-10 h-10 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default FallbackSpinner;
