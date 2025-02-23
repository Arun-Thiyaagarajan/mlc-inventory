import { useNavigation } from "react-router-dom";


const SubmitBtn = ({ text='submit', statusText, size='btn-block', icon: Icon }) => {

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <button
      type="submit"
      className={`btn btn-neutral ${size} capitalize text-white transition duration-300 hover:opacity-75`}
      disabled={isSubmitting}>
      {
        isSubmitting ? (
          <>
            <span className="loading loading-spinner"></span>
            {statusText}
          </>
        ) : (
            <>
              {Icon && <Icon className='size-5' />} { text }
            </>
        ) 
      }
    </button>
  );
}
export default SubmitBtn;