import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Field, Form, Formik } from "formik";
import { useAuth } from "../firebase/auth";
import {
  addCategory,
  deleteCategory,
  getCategories,
} from "../firebase/firestore";
import { toast } from "react-toastify";

function Category() {
  const { authUser } = useAuth();
  const [show, setShow] = useState(false);
  const [categories, setCategories] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = async (categoryId) => {
    try {
      await deleteCategory(categoryId);
      setCategories(
        categories.filter((category) => category.id !== categoryId)
      );
      toast.success("Category Deleted");
    } catch (error) {
      toast.error("Failed to delete category");
      console.log(error)
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const userCategories = await getCategories(authUser.uid);
        setCategories(userCategories);
      } catch (error) {}
    };

    if (authUser) {
      fetchCategories();
    }
  }, [authUser]);

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
        {categories.map((category) => (
          <div key={category.id}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6
                className="fw-bold"
                style={{ color: category.color.toLowerCase() }}
              >
                {category.name}
              </h6>

              <div className="btn-group" role="group">
                <button className="btn">
                  <i className="bi bi-pencil-square"></i>
                </button>
                <button
                  className="btn"
                  onClick={() => handleDelete(category.id)}
                >
                  <i className="bi bi bi-trash3-fill"></i>
                </button>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </section>
    </div>
  );
}

export default Category;
