const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center h-full border-2">
      {children}
    </div>
  );
};

export default layout;
