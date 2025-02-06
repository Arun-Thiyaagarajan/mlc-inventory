import { useEffect, useRef } from 'react';
import { AntMessageText, FormInput, SubmitBtn } from '../../components';
import { Form, Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { toast } from 'react-toastify';
import { authService } from '../../api';
import { showMessage } from '../../hooks';
import { EAntStatusMessage } from '../../enums';
import { AnimEmojis } from '../../config/configData';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await authService.register(data);
    showMessage(
      EAntStatusMessage.SUCCESS,
      AntMessageText({
        statusText: 'Check your mail for complete verification!',
        emoji: AnimEmojis.Rocket
      })
    );
    return null;
  } catch (error) {
    const errorMessage = error?.response?.data?.message;
    showMessage(
      EAntStatusMessage.ERROR,
      AntMessageText({
        statusText: `Oops! ${errorMessage}`,
        emoji: AnimEmojis.BigFrown
      })
    );
    return null;
  }
};

const Register = () => {
  const nameRef = useRef(null);

  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.focus();
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content - Centered */}
      <section className="flex-1 flex items-center justify-center">
        <Form method="POST" className="center-screen-card">
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