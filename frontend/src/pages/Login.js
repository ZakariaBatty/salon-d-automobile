import React, { useState, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { login } from '../redux/actions/clientActions';
import { Redirect } from 'react-router-dom';

function Login({ clientError, clientSuccess }) {
  const [client, setClient] = useState({
    email: '',
    password: '',
  });

  // use State
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // dispatch
  const dispatch = useDispatch();

  // use Effact
  useEffect(() => {
    if (clientError && clientError !== null) {
      setError(clientError);
    }
    if (clientSuccess) {
      setSuccess(clientSuccess);
      dispatch({ type: 'TOGGLE_SUCCESS' });
    }
  }, [clientError, clientSuccess]);

  // get value in input
  function handleInputChange(event) {
    setClient({ ...client, [event.target.name]: event.target.value });
  }

  // if click submit
  function handleFormSubmit(event) {
    event.preventDefault();
    dispatch(login(client));
  }

  function showError() {
    return error && <div className="alert alert-danger">{error}</div>;
  }

  function redirectClient() {
    return success && <Redirect to="/" />;
  }

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-md-6 mx-auto">
          {showError()} {redirectClient()}
          <h3 className="card-title">Inscription</h3>
          <form onSubmit={handleFormSubmit} className="card p-2">
            <div className="form-group my-2">
              <input
                type="email"
                name="email"
                placeholder="email"
                value={client.email}
                required
                onChange={(event) => handleInputChange(event)}
                className="form-control"
              />
            </div>

            <div className="form-group my-2">
              <input
                type="password"
                name="password"
                placeholder="password"
                value={client.password}
                required
                onChange={(event) => handleInputChange(event)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-outline-primary my-2">
                Valider
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ client: { clientError, clientSuccess } }) => ({
  clientError,
  clientSuccess,
});

export default connect(mapStateToProps, null)(Login);
