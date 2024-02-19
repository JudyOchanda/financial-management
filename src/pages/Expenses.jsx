/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useAuth } from "../firebase/auth";
import Modal from "react-bootstrap/Modal";
import { Form, Formik } from "formik";
import { deleteImage, uploadImage } from "../firebase/storage";
import { toast } from "react-toastify";
import {
  addExpense,
  deleteExpense,
  getCategories,
  getExpenses,
  updateExpense,
} from "../firebase/firestore";
import { Link } from "react-router-dom";
function Expenses() {
  const { authUser } = useAuth();
  const [show, setShow] = useState(false);
  const [categories, setCategories] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [open, setOpen] = useState([]);
  const [updateExpenseId, setUpdateExpenseId] = useState(null);

  const [updateExpenseName, setUpdateExpenseName] = useState("");
  const [updateExpenseDate, setUpdateExpenseDate] = useState("");
  const [updateExpenseDescription, setUpdateExpenseDescription] = useState("");
  const [updateExpenseAmount, setUpdateExpenseAmount] = useState("");
  const [updateExpenseCategory, setUpdateExpenseCategory] = useState("");
  const [updateExpenseReceiptImage, setUpdateExpenseReceiptImage] =
    useState("");

  const handleShut = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteExpense = async (expenseId, imageUrl) => {
    try {
      // Delete the image from storage if it exists
      if (imageUrl) {
        await deleteImage(imageUrl, authUser.id);
      }

      // Delete the expense from Firestore
      await deleteExpense(expenseId, authUser.uid);

      toast.success("Expense Deleted");

      // Optionally, update your state to remove the deleted expense from the UI
    } catch (error) {
      // Handle error
    }
  };

  const handleUpdateExpense = async (
    expenseId,
    newName,
    newDate,
    newDescription,
    newAmount,
    newReceiptImage,
    newCategory
  ) => {
    setUpdateExpenseId(expenseId);
    setUpdateExpenseName(newName);
    setUpdateExpenseDate(newDate);
    setUpdateExpenseDescription(newDescription);
    setUpdateExpenseAmount(newAmount);
    setUpdateExpenseReceiptImage(newReceiptImage);
    setUpdateExpenseCategory(newCategory);
    handleOpen();
  };
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

  return (
    <>
      <div className="container py-3">
        {/* creating the expenses */}
        <section>
          <div className="d-flex justify-content-between">
            <h2 className="fw-bold text-uppercase">Expenses</h2>
            <Button onClick={handleShow} variant="outline-primary btn-sm">
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
                  name: "",
                  description: "",
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
                      values.name,
                      values.description,
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
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        onChange={(event) => {
                          setFieldValue("name", event.currentTarget.value);
                        }}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="description" className="form-label">
                        Description
                      </label>
                      <input
                        type="textarea"
                        className="form-control"
                        name="description"
                        id="description"
                        onChange={(event) => {
                          setFieldValue(
                            "description",
                            event.currentTarget.value
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

        {/* displaying the expenses */}
        <section>
          <div className="row">
            {expenses.map((expense) => {
              const category = categories.find(
                (cat) => cat.id === expense.categoryId
              );
              const categoryName = category ? category.name : "";

              return (
                <div key={expense.id} className="col-md-4 col-sm-12 mb-3">
                  <div className="card h-100">
                    {expense.imageUrl && (
                      <img
                        src={expense.imageUrl}
                        alt=""
                        className="card-img-top"
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                    )}

                    <div className="card-body">
                      <h5 className="card-title">{expense.name}</h5>
                      <p className="card-text">{expense.date}</p>
                      <p className="card-text">{expense.description}</p>
                      <p className="card-text">
                        <strong>Amount: </strong>
                        {expense.amount}
                      </p>
                      <Link
                        className="btn btn-sm card-link"
                        disabled
                        style={{ borderColor: category.color }}
                      >
                        {categoryName}
                      </Link>
                    </div>
                    <div className="card-footer">
                      <div className="d-flex justify-content-between">
                        <button
                          onClick={() =>
                            handleUpdateExpense(
                              expense.id,
                              expense.name,
                              expense.description,
                              expense.amount,
                              expense.categoryId
                            )
                          }
                          className="btn btn-outline-warning"
                        >
                          Update
                        </button>
                        <Link
                          onClick={() =>
                            handleDeleteExpense(
                              expense.id,
                              authUser.uid,
                              expense.imageUrl
                            )
                          }
                          className="btn-outline-danger btn card-link"
                        >
                          Delete
                        </Link>
                      </div>

                      <Modal
                        show={open && updateExpenseId === expense.id}
                        dialogClassName="modal-dialog modal-dialog-centered"
                        onHide={handleShut}
                      >
                        <div className="modal-header">
                          <h5 className="modal-title">Update {expense.name}</h5>
                          <button
                            type="button"
                            className="btn-close"
                            onClick={handleShut}
                          ></button>
                        </div>
                        <div className="modal-body">
                          <Formik
                            initialValues={{
                              name: updateExpenseName,
                              description: updateExpenseDescription,
                              amount: updateExpenseAmount,
                              categoryId: updateExpenseCategory,
                              date: updateExpenseDate,
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

                                await updateExpense(
                                  updateExpenseId,
                                  authUser.uid,
                                  values.date,
                                  values.categoryId,
                                  values.name,
                                  values.description,
                                  values.amount,
                                  bucket
                                );
                                toast.success("Expense Updated");
                                setOpen(false);
                              } catch (error) {
                                toast.error("Expense Update Failed");
                              }
                            }}
                          >
                            {({ setFieldValue }) => (
                              <Form>
                                <div className="mb-3">
                                  <label
                                    htmlFor="receiptImage"
                                    className="form-label"
                                  >
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
                                  <label htmlFor="name" className="form-label">
                                    Name
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    id="name"
                                    onChange={(event) => {
                                      setFieldValue(
                                        "name",
                                        event.currentTarget.value
                                      );
                                    }}
                                  />
                                </div>

                                <div className="mb-3">
                                  <label
                                    htmlFor="description"
                                    className="form-label"
                                  >
                                    Description
                                  </label>
                                  <input
                                    type="textarea"
                                    className="form-control"
                                    name="description"
                                    id="description"
                                    onChange={(event) => {
                                      setFieldValue(
                                        "description",
                                        event.currentTarget.value
                                      );
                                    }}
                                  />
                                </div>

                                <div className="mb-3">
                                  <label
                                    htmlFor="amount"
                                    className="form-label"
                                  >
                                    Amount
                                  </label>
                                  <input
                                    type="number"
                                    className="form-control"
                                    name="amount"
                                    id="amount"
                                    onChange={(event) => {
                                      setFieldValue(
                                        "amount",
                                        event.currentTarget.value
                                      );
                                    }}
                                  />
                                </div>

                                <div className="mb-3">
                                  <label
                                    htmlFor="categoryId"
                                    className="form-label"
                                  >
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
                                    <option value="">
                                      Select a category...
                                    </option>
                                    {categories.map((category) => (
                                      <option
                                        key={category.id}
                                        value={category.id}
                                      >
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
                                      setFieldValue(
                                        "date",
                                        event.currentTarget.value
                                      );
                                    }}
                                  />
                                </div>

                                <div className="mb-3">
                                  <button
                                    type="submit"
                                    className="btn btn-primary"
                                  >
                                    Update Expense
                                  </button>
                                </div>
                              </Form>
                            )}
                          </Formik>
                        </div>
                      </Modal>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}

export default Expenses;
