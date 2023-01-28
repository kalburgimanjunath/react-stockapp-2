import React from 'react';
import './style.css';
import { BasicTable, Header, Footer } from './components/index';
import { useEarthoOne } from '@eartho/one-client-react';
export default function App() {
  const { isLoading, isConnected, error, user, connectWithPopup, logout } =
    useEarthoOne();
  console.log(user);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  if (isConnected) {
    return (
      <div>
        <div>
          <Header>
            Hello {user.displayName}{' '}
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Log out
            </button>
          </Header>

          <BasicTable title="Day Stock Prediction" />
          <BasicTable title="Week Stock Prediction" />
          <BasicTable title="Quarter Stock Prediction" />
          <Footer />
        </div>
      </div>
    );
  } else {
    return (
      <>
        <Header>
          <button
            className="btn btn-outline-success"
            id="login"
            onClick={() =>
              connectWithPopup({ access_id: 'Xk6ye43Ygg6EdjhhVn5z' })
            }
          >
            Log in
          </button>
        </Header>

        <BasicTable title="Day Stock Prediction" />
        <BasicTable title="Week Stock Prediction" />
        <BasicTable title="Quarter Stock Prediction" />
        <Footer />
      </>
    );
  }

  return (
    <div>
      <Header />

      <BasicTable title="Day Stock Prediction" />
      <BasicTable title="Week Stock Prediction" />
      <BasicTable title="Quarter Stock Prediction" />
      <Footer />
    </div>
  );
}
