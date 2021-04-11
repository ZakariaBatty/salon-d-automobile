import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import createClient from '../redux/actions/clientActions';

export default function Register() {
  const [client, setClient] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  function handleInputChange(event) {
    setClient({ ...client, [event.target.name]: event.target.value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    dispatch(createClient(client));
  }

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-md-6 mx-auto">
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
