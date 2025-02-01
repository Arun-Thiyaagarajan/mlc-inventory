import { FormInput, SubmitBtn } from '../../components';
import { Form, Link } from 'react-router-dom';
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { useEffect, useRef } from 'react';
import { CustomFetch } from '../../utils/index';
import { toast } from 'react-toastify';

// This action will be called when the form is submitted
export const action = (store) => async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await CustomFetch.post('/auth/login', data);
    // store.dispatch(loginUser(response.data));
    toast.success('Logged In Successfully');
    console.log(response.data)
    return null;
    return redirect('/');
  } catch (error) {
    console.log(error)
    const errorMessage = error?.response?.data?.error?.message || 'please double check your credentials';
    toast.error(errorMessage);
    return null;
  }
};

const Login = () => {
  const emailRef = useRef(null);

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);

  return (
    <>
      <section className="center-screen">
        <Form method="POST" className="center-screen-card">
          <h4 className="text-center text-2xl font-semibold mb-6">Login</h4>

          <FormInput
            inputRef={emailRef}
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
            <SubmitBtn text="login" statusText='logging in...' />
          </div>

          <p className='mt-3 text-center'>
            <Link to="/auth/forgot-password" className="link link-hover">Forgot password?</Link>
          </p>

          <p className='mt-5 text-center'>
            <span>Don't have an account?</span>
            <Link to="/auth/register" className="btn btn-sm bg-base-100 hover:bg-base-100 ml-3">
              Register
              <ArrowRightIcon className='size-4' />
            </Link>
          </p>

          <p className='mt-5 text-center'>
            <Link to='/auth/verify-account'>Verify</Link>
          </p>
        </Form>
      </section>
    </>
  );
}
export default Login;