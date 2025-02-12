// react imports
import { useEffect, useRef } from 'react';
import { Form, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// external imports
import { ArrowRightIcon } from '@heroicons/react/20/solid';
// component imports
import { AntMessageText, FormInput, SubmitBtn } from '../../components';
import { EAntStatusMessage } from '../../enums';
import { AnimEmojis } from '../../config/configData';
import { registerUser } from '../../store/slices';
import { showMessage } from '../../hooks';

const Register = () => {
  const dispatch = useDispatch();

  const nameRef = useRef(null);

  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.focus();
    }
  }, []);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    dispatch(registerUser(data))
      .unwrap()
      .then(() => {
        showMessage(
          EAntStatusMessage.SUCCESS,
          AntMessageText({
            statusText: 'Check your mail for complete verification!',
            emoji: AnimEmojis.Rocket,
          })
        );
      })
      .catch((error) => {
        const errorMessage = error?.response?.data?.message || 'Something went wrong';
        showMessage(
          EAntStatusMessage.ERROR,
          AntMessageText({
            statusText: `Oops! ${errorMessage}`,
            emoji: AnimEmojis.BigFrown,
          })
        );
      });
  };


  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content - Centered */}
      <section className="flex-1 flex items-center justify-center">
        <Form method="POST" className="center-screen-card" onSubmit={handleSubmit}>
          <h4 className="text-center text-2xl font-semibold mb-6">Register</h4>
          
          <FormInput
            inputRef={nameRef}
            type="name"
            label="full name"
            name="fullName"
            required={true}
          />
          
          <FormInput
            type="email" 
            label="email address" 
            name="email"
            required={true}
          />
          
          <FormInput
            type="password" 
            label="password" 
            name="password"
            required={true}
          />
          
          <div className='mt-3'>
            <SubmitBtn text="register" statusText='registering...' />
          </div>
        </Form>
      </section>
      {/* Footer - Stays at the Bottom */}
      <footer className="w-full pb-12 text-center mt-auto">
        <p>
          <span>Already a member?</span>
          <Link to="/auth/login" className="btn btn-sm bg-base-100 hover:bg-base-100 ml-3">
            Login
            <ArrowRightIcon className='size-4' />
          </Link>
        </p>
      </footer>
    </div>
  );
}
export default Register;