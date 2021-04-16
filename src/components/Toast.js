import React, { useEffect } from 'react';
import { ToastContainer, toast as tast } from 'react-toastify';
import { connect } from 'react-redux';
import { Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { clearMessage } from 'utils/functions';

const toastConfig = {
  hideProgressBar: true,
  duration: 1000,
};

export const Success = ({ message }) => (
  <div>
    <span>📣&nbsp; {message}</span>
  </div>
);

export const Error = ({ message }) => (
  <div>
    <span>😔&nbsp; {message}</span>
  </div>
);

export const Info = ({ message }) => (
  <div>
    <span>📣&nbsp; {message}</span>
  </div>
);

const Toast = ({ error, success, message, clearMessage }) => {
  useEffect(() => {
    openNotification();
  }, [success, error]);

  const openNotification = () => {
    if (success && message) {
      tast.success(<Success message={message} />, {
        hideProgressBar: true,
      });
    }
    if (error && message) {
      tast.error(<Error message={message} />, {
        hideProgressBar: true,
      });
    }
    setTimeout(function () {
      clearMessage();
    }, 3000);
  };

  return (
    <>
      <ToastContainer
        autoClose={3000}
        pauseOnHover={true}
        position="top-center"
        transition={Slide}
      />
    </>
  );
};

export const toast = {
  success: (message, otherConfig) => {
    tast.success(<Success message={message} />, {
      ...toastConfig,
      ...otherConfig,
    });
  },
  info: (message, otherConfig) => {
    tast.info(<Info message={message} />, {
      ...toastConfig,
      ...otherConfig,
    });
  },
  error: (message, otherConfig) => {
    tast.error(<Error message={message} />, {
      ...toastConfig,
      ...otherConfig,
    });
  },
};

const map_state_to_props = ({ message }) => {
  return {
    success: message.success,
    error: message.error,
    message: message.message,
  };
};

export default connect(map_state_to_props, { clearMessage })(Toast);
