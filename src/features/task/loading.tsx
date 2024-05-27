interface loadingProps {
  loading?: boolean;
}

const Loading = ({ loading = true }: loadingProps) => {
  if (!loading) return null;
  return (
    <div className="w-full p-2 mt-3 text-center text-white bg-blue-600 border border-blue-950 animate-pulse">
      Loading ...
    </div>
  );
};
export default Loading;
