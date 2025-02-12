import { FormInput } from "../../components";

const TilesForm = () => {
  return (
    <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <FormInput
        label="design name"
        name='name'
        type='text'
      />
    </div>
  );
}
export default TilesForm;