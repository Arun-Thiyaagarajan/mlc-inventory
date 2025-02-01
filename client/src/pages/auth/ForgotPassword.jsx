import { FormInput, SubmitBtn } from '../../components';
import { Form, Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import { useEffect, useRef } from 'react';

const ForgotPassword = () => {
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
          <h4 className="text-center text-2xl font-semibold mb-6">Forgot Password</h4>
          <div className="info space-y-2 mb-2">
            <h5 className="text-center text-sm font-semibold">Reset Your Password</h5>
            <p className="text-center text-sm text-gray-500">
              Enter your email address and we'll send you a password reset link.
            </p>
          </div>
          <FormInput inputRef={emailRef} type="email" label="email address" name="email" />
          <div className='mt-3'>
            <SubmitBtn text="reset your password" statusText='sending mail...' />
          </div>
          <p className='mt-5 text-center'>
            <Link to="/auth/login" className="btn btn-sm bg-base-100 hover:bg-base-100 ml-3">
              <ArrowLeftIcon className='size-4' /> Go Back
            </Link>
          </p>
        </Form>
      </section>
    </>
  );
}
export default ForgotPassword;