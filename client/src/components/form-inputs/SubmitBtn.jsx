import { useNavigation } from "react-router-dom";


const SubmitBtn = ({ text, statusText, size='btn-block' }) => {

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <button
      type="submit"
      className={`btn btn-neutral ${size} capitalize text-white transition duration-300 hover:opacity-75`}
      disabled={isSubmitting}>
      {
        isSubmitting ? (<>
          <span className="loading loading-spinner"></span>
          {statusText}
        </>) : (
            text || 'submit'
        ) 
      }
    </button>
  );
}
export default SubmitBtn;