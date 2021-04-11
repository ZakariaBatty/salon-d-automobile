import React, { useState, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import createClient from '../redux/actions/clientActions';
import { Redirect } from 'react-router-dom';

function Register({ clientError, clientSuccess }) {
  const [client, setClient] = useState({
    firstName: '',
    lastName: '',
    cin: '',
    email: '',
    telephone: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (clientError && clientError !== null) {
      setError(clientError);
    }
    if (clientSuccess) {
      setSuccess(clientSuccess);
    }
  }, [clientError, clientSuccess]);

  function handleInputChange(event) {
    setClient({ ...client, [event.target.name]: event.target.value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    dispatch(createClient(client));
  }

  function showError() {
    return error && <div className="alert alert-danger">{error}</div>;
  }

  function redirectClient() {
    return success && <Redirect to="/login" />;
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
                type="text"
                name="firstName"
                placeholder="first Name"
                value={client.firstName}
                required
                onChange={(event) => handleInputChange(event)}
                className="form-control"
              />
            </div>
            <div className="form-group my-2">
              <input
                type="text"
                name="lastName"
                placeholder="last Name"
                value={client.lastName}
                required
                onChange={(event) => handleInputChange(event)}
                className="form-control"
              />
            </div>
            <div className="form-group my-2">
              <input
                type="text"
                name="cin"
                placeholder="cin"
                value={client.cin}
                required
                onChange={(event) => handleInputChange(event)}
                className="form-control"
              />
            </div>
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
                type="number"
                name="telephone"
                placeholder="téléphone"
                value={client.telephone}
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

const mapStateToProps = ({ client: {clientError, clientSuccess} }) => ({
  clientError,
  clientSuccess,
});

export default connect(mapStateToProps, null)(Register);
