import React from 'react';
import Button from "react-bootstrap/Button";
function Expenses() {
    return (
      <>
        <div className="container py-3">
          <section>
            <div className="d-flex justify-content-between">
              <h2 className='fw-bold text-uppercase'>Expenses</h2>
              <Button variant="outline-primary">Add Expense</Button>
            </div>
          </section>
          <hr />

          <section>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                </table>
            </div>
          </section>
        </div>
      </>
    );
}

export default Expenses;