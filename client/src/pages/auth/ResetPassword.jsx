import { FormInput, SubmitBtn } from '../../components';
import { Form, Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import { useEffect, useRef } from 'react';

const ResetPassword = () => {
  const passwordRef = useRef(null);

  useEffect(() => {
    if (passwordRef.current) {
      passwordRef.current.focus();
    }
  }, []);

  return (
    <div className='min-h-screen flex flex-col'>
      {/* Main Content - Centered */}
      <section className="flex-1 flex items-center justify-center">
        <Form method="POST" className="center-screen-card">
          <h4 className="text-center text-2xl font-semibold mb-6">Reset Password</h4>

          <div className="info space-y-2 mb-2">
            <h5 className="text-center text-sm font-semibold">Reset Your Password</h5>
            <p className="text-center text-sm text-gray-500">
              Enter your new secured password. Make sure, you remember this time.
            </p>
          </div>

          <FormInput
            inputRef={passwordRef}
            type="password"
            label="password"
            name="password"
            required={true}
          />

          <div className='mt-3'>
            <SubmitBtn text="reset your password" statusText='resetting password...' />
          </div>
        </Form>
      </section>

      {/* Footer - Stays at the Bottom */}
      {/* <footer className="w-full pb-12 text-center mt-auto">
        <p>
          <Link to="/auth/login" className="btn btn-sm bg-base-100 hover:bg-base-100 ml-3">
            <ArrowLeftIcon className='size-4' /> Go Back
          </Link>
        </p>
      </footer> */}
    </div>
  );
}
export default ResetPassword;