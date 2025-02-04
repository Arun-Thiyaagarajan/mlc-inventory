
const AntMessageText = ({ statusText, emoji, width = 20, height = 20 }) => {
  return (
    <div className="flex items-center gap-x-2">
      <span className="text-neutral">{statusText}</span>
      <img src={emoji} width={width} height={height} />
    </div>
  );
};

export default AntMessageText;
