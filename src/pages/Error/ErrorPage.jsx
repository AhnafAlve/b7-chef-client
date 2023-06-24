import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section>
      <div className='d-flex justify-content-center align-items-center mt-5'>
        <div className='max-w-md text-center'>
          <div className='d-flex justify-content-start align-items-center mb-8'>
            {/* Illustration Image */}
            <img
              src='https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=826&t=st=1686808916~exp=1686809516~hmac=e8d08b7ee897279d48b66b267e36d3272bfb508bec63d3c88c4857b598f0cdbe'
              alt='Illustration'
              className='mr-4'
              style={{ width: '400px' }}
            />
            <h2 className='font-extrabold text-9xl text-gray-600'>
              <span className='sr-only'>URL Not Found</span> {status || 404}
            </h2>
          </div>
          <h2 className='text-2xl font-semibold md:text-3xl my-5'>
            {error?.message}
          </h2>
          <Link to='/home' className='btn btn-success'>
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;