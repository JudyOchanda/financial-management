import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Field, Form, Formik } from "formik";
import { useAuth } from "../firebase/auth";
import {
  addCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from "../firebase/firestore";
import { toast } from "react-toastify";

function Category() {
  const { authUser } = useAuth();
  const [show, setShow] = useState(false);
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [editCategoryId, setEditCategoryId] = useState(null);
  const [editCategoryName, setEditCategoryName] = useState("");
  const [editCategoryColor, setEditCategoryColor] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleShut = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const handleDelete = async (categoryId) => {
    try {
      await deleteCategory(categoryId);
      setCategories(
        categories.filter((category) => category.id !== categoryId)
      );
      toast.success("Category Deleted");
    } catch (error) {
      toast.error("Failed to delete category");
    }
  };

  const handleEditCategory = (categoryId, categoryName, categoryColor) => {
    setEditCategoryId(categoryId);
    setEditCategoryName(categoryName);
    setEditCategoryColor(categoryColor);
    handleOpen();
  };

  const handleUpdateCategory = async (categoryId, newName, newColor) => {
    try {
      await updateCategory(categoryId, newName, newColor);
      handleClose();
    } catch (error) {
      toast.error("Failed to update category");
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
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </Modal>
      </section>

      <hr />

      {/* reading, updating and deleting  */}
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
                <button
                  className="btn"
                  onClick={() =>
                    handleEditCategory(
                      category.id,
                      category.name,
                      category.color
                    )
                  }
                >
                  <i className="bi bi-pencil-square"></i>
                </button>
                <button
                  className="btn"
                  onClick={() => handleDelete(category.id)}
                >
                  <i className="bi bi bi-trash3-fill"></i>
                </button>
              </div>

              <Modal
                show={open && editCategoryId === category.id}
                onHide={handleShut}
              >
                <div className="modal-header">
                  <h5 className="modal-title">
                    Update Category {category.name}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={handleShut}
                  ></button>
                </div>
                <div className="modal-body">
                  <Formik
                    initialValues={{
                      name: editCategoryName,
                      color: editCategoryColor,
                    }}
                    onSubmit={async (values) => {
                      try {
                        await handleUpdateCategory(
                          category.id,
                          values.name,
                          values.color
                        );
                        toast.success("Category Updated");
                        setOpen(false);
                        window.location.reload();
                      } catch (error) {}
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <div className="mb-3">
                          <label htmlFor="name" className="form-label">
                            Category Name
                          </label>
                          <Field
                            className="form-control"
                            type="text"
                            name="name"
                          />
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
                          <Field
                            className="form-control"
                            type="text"
                            name="color"
                          />
                          {touched.color && errors.color && (
                            <div className="text-danger fst-italic fs-6">
                              {errors.color}
                            </div>
                          )}
                        </div>

                        <div className="mb-3">
                          <button
                            type="submit"
                            className="btn btn-outline-dark"
                          >
                            Update Category
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleShut}
                  >
                    Close
                  </button>
                </div>
              </Modal>
            </div>
            <hr />
          </div>
        ))}
      </section>
    </div>
  );
}

export default Category;
