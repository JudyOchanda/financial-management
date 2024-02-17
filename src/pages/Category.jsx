import React from "react";
import Button from "react-bootstrap/Button";
import { category } from "../data/categorySample";

function Category() {
  return (
    <div className="container py-2">
      <section>
        <div className="d-flex justify-content-between">
          <h2 className="fw-bold text-uppercase">Category</h2>
          <Button variant="outline-primary">New Category</Button>
        </div>
      </section>
      <hr />

      <section>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Color</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {category.map((item) => (
                <>
                  <tr key={item.id}>
                    <td>
                      <button
                        className="btn"
                        style={{
                          height: "20px",
                          width: "20px",
                          borderRadius: "50%",
                          backgroundColor: item.color,
                        }}
                      ></button>
                    </td>
                    <td>{item.name}</td>
                    <td>
                      <Button variant="outline-primary">Manage</Button>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Category;
