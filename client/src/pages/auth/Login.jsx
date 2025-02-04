import { Form, Link, redirect } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { CustomFetch } from '../../utils';
import { showMessage } from '../../hooks';
import { EAntStatusMessage } from '../../enums';
import { AnimEmojis } from '../../config/configData';
import { AntMessageText, FormInput, SubmitBtn } from '../../components';
import { loginUser } from '../../store/slices';

// This action will be called when the form is submitted
export const action = (store) => async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await CustomFetch.post('/auth/login', data);
    store.dispatch(loginUser(response.data));
    
    showMessage(
      EAntStatusMessage.SUCCESS,
      AntMessageText({
        statusText: 'Welcome back, Chief',
        emoji: AnimEmojis.NerdFace
      })
    );

    console.log(response.data);
    return redirect('/');
  } catch (error) {
    const errorMessage = error?.response?.data?.error?.message || 'please double check your credentials';
    
    showMessage(
      EAntStatusMessage.ERROR,
      AntMessageText({
        statusText: 'Oops! Invalid Credentials, Chief!',
        emoji: AnimEmojis.BigFrown
      })
    );

    return null;
  }
};

const Login = () => {
  const emailRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content - Centered */}
      <section className="flex-1 flex items-center justify-center">
        <Form method="POST" className="center-screen-card">
          <h4 className="text-center text-2xl font-semibold mb-6">Login</h4>

          <FormInput
            inputRef={emailRef}
            type="email"
            label="email address"
            name="email"
            defaultValue='arunthiyaagarajan.ta@gmail.com'
            required={true}
          />

          <FormInput
            type="password"
            label="password"
            name="password"
            defaultValue='Mlc@2025'
            required={true}
          />

          <div className='mt-3'>
            <SubmitBtn text="Login" statusText='Logging in...' />
          </div>

          <p className='mt-3 text-center'>
            <Link to="/auth/forgot-password" className="link link-hover">
              Forgot password?
            </Link>
          </p>
        </Form>
      </section>

      {/* Footer - Stays at the Bottom */}
      <footer className="w-full pb-12 text-center mt-auto">
        <p>
          <span>Don't have an account?</span>
          <Link to="/auth/register" className="btn btn-sm bg-base-100 hover:bg-base-100 ml-3">
            Register
            <ArrowRightIcon className='size-4' />
          </Link>
        </p>
      </footer>
    </div>
  );

}
export default Login;