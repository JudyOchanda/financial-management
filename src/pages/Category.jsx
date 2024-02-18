import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { category } from "../data/categorySample";
import { Field, Form, Formik } from "formik";
import { useAuth } from "../firebase/auth";
import { addCategory } from "../firebase/firestore";
import { toast } from "react-toastify";

function Category() {
  const { authUser } = useAuth();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container py-2">
      <section>
        <div className="d-flex justify-content-between">
          <h2 className="fw-bold text-uppercase">Category</h2>
          <Button onClick={handleShow} variant="outline-primary">
            New Category
          </Button>
        </div>

        <Modal
          show={show}
          onHide={handleClose}
          dialogClassName="modal-dialog modal-dialog-centered"
        >
          <div className="modal-header">
            <h5 className="modal-title">Add a Category</h5>
            <button
              type="button"
              className="btn-close"
              onClick={handleClose}
            ></button>
          </div>

          <div className="modal-body">
            <Formik
              initialValues={{
                name: "",
                color: "",
              }}
              onSubmit={async (values) => {
                try {
                  await addCategory(authUser.uid, values.name, values.color);
                  toast.success("Category Added");
                  setShow(false);
                  window.location.reload();
                } catch (error) {
                  toast.error("Category Add Failed");
                }
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Category Name
                    </label>
                    <Field className="form-control" type="text" name="name" />
                    {touched.name && errors.name && (
                      <div className="text-danger fst-italic fs-6">
                        {errors.name}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="color" className="form-label">
                      Category Color
                    </label>
                    <Field className="form-control" type="text" name="color" />
                    {touched.color && errors.color && (
                      <div className="text-danger fst-italic fs-6">
                        {errors.color}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <button type="submit" className="btn btn-outline-dark">
                      Add Category
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </Modal>
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
