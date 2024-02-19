/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useAuth } from "../firebase/auth";
import Modal from "react-bootstrap/Modal";
import { Form, Formik } from "formik";
import { uploadImage } from "../firebase/storage";
import { toast } from "react-toastify";
import { addExpense, getCategories, getExpenses } from "../firebase/firestore";
function Expenses() {
  const { authUser } = useAuth();
  const [show, setShow] = useState(false);
  const [categories, setCategories] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const userCategories = await getCategories(authUser.uid);
        setCategories(userCategories);
      } catch (error) {}
    };

    const fetchExpenses = async () => {
      try {
        const userExpenses = await getExpenses(authUser.uid);
        setExpenses(userExpenses);
      } catch (error) {}
    };

    if (authUser) {
      fetchCategories();
      fetchExpenses();
    }
  }, [authUser]);
  
  console.log(expenses)


  return (
    <>
      <div className="container py-3">
        <section>
          <div className="d-flex justify-content-between">
            <h2 className="fw-bold text-uppercase">Expenses</h2>
            <Button onClick={handleShow} variant="outline-primary">
              Add Expense
            </Button>
          </div>

          <Modal
            show={show}
            onHide={handleClose}
            dialogClassName="modal-dialog modal-dialog-centered"
          >
            <div className="modal-header">
              <h5 className="modal-title">Add an Expense</h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleClose}
              ></button>
            </div>

            <div className="modal-body">
              <Formik
                initialValues={{
                  receiptImage: "",
                  amount: "",
                  categoryId: "",
                  date: "",
                }}
                onSubmit={async (values) => {
                  try {
                    let bucket = null;
                    if (values.receiptImage) {
                      bucket = await uploadImage(
                        values.receiptImage,
                        authUser.uid
                      );
                    }

                    await addExpense(
                      authUser.uid,
                      values.date,
                      values.categoryId,
                      values.amount,
                      bucket
                    );
                    toast.success("Expense Added");
                    setShow(false);
                  } catch (error) {
                    toast.error("Expense Add Failed");
                  }
                }}
              >
                {({ setFieldValue }) => (
                  <Form>
                    <div className="mb-3">
                      <label htmlFor="receiptImage" className="form-label">
                        Receipt Image
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        onChange={(event) => {
                          setFieldValue(
                            "receiptImage",
                            event.currentTarget.files[0]
                          );
                        }}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="amount" className="form-label">
                        Amount
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        name="amount"
                        id="amount"
                        onChange={(event) => {
                          setFieldValue("amount", event.currentTarget.value);
                        }}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="categoryId" className="form-label">
                        Category
                      </label>
                      <select
                        className="form-select"
                        name="categoryId"
                        id="categoryId"
                        onChange={(event) => {
                          setFieldValue(
                            "categoryId",
                            event.currentTarget.value
                          );
                        }}
                      >
                        <option value="">Select a category...</option>
                        {categories.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="date" className="form-label">
                        Date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        name="date"
                        id="date"
                        onChange={(event) => {
                          setFieldValue("date", event.currentTarget.value);
                        }}
                      />
                    </div>

                    <div className="mb-3">
                      <button type="submit" className="btn btn-primary">
                        Add Expense
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

        <section></section>
      </div>
    </>
  );
}

export default Expenses;
