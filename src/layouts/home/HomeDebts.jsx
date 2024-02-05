import React from 'react'
import { useUserContext } from '../../authContext';
import { Link } from 'react-router-dom';

function HomeDebts() {
    const { user } = useUserContext();
  return (
    <>
      <div className="card shadow mb-3">
        <h5 className="card-header">Debts</h5>
        <ul className="list-group">
          {user.debts.map((debt) => (
            <li
              key={debt.id}
              className="list-group-item d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{debt.creditors}</div>
                Ksh {debt.amount} - {debt.dueDate}
              </div>
              <span className="badge bg-primary rounded-pill">
                <Link>
                  <i className="bi bi-arrow-right text-white"></i>
                </Link>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default HomeDebts