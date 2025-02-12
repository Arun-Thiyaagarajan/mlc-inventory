

const SectionTitle = ({ text }) => {
  return (
    <div className="flex items-center gap-x-5 mb-8">
      <div className="bg-base-content rounded-md w-[6px] self-stretch"></div>
      <h2 className="text-3xl font-semibold tracking-tight capitalize">
        {text}
      </h2>
    </div>
  );
}
export default SectionTitle;