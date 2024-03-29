import { db } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL } from "./storage";

const CATEGORY_COLLECTION = "categories";
const EXPENSES_COLLECTION = "expenses";

// categories CRUD
// creating category
export async function addCategory(uid, name, color) {
  const categoryRef = await addDoc(collection(db, CATEGORY_COLLECTION), {
    uid,
    name,
    color,
  });
  return { id: categoryRef.id, uid, name, color };
}

// fetching categories
export async function getCategories(uid) {
  const categoriesRef = collection(db, CATEGORY_COLLECTION);
  const querySnapshot = await getDocs(
    query(categoriesRef, where("uid", "==", uid))
  );

  let categories = [];
  querySnapshot.forEach((doc) => {
    categories.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return categories;
}

// delete a category
export async function deleteCategory(categoryId) {
  await deleteDoc(doc(db, CATEGORY_COLLECTION, categoryId));
}

// update a category
export async function updateCategory(categoryId, newName, newColor) {
  const categoryRef = doc(db, CATEGORY_COLLECTION, categoryId);

  await updateDoc(categoryRef, {
    name: newName,
    color: newColor,
  });
}

// Expenses CRUD

// create expense
export function addExpense(
  uid,
  date,
  categoryId,
  name,
  description,
  amount,
  imageBucket
) {
  addDoc(collection(db, EXPENSES_COLLECTION), {
    uid,
    date,
    categoryId,
    name,
    description,
    amount,
    imageBucket,
  });
}

// get expenses

export async function getExpenses(uid) {
  const expensesRef = collection(db, EXPENSES_COLLECTION);
  const querySnapshot = await getDocs(
    query(expensesRef, where("uid", "==", uid))
  );

  const expensePromises = querySnapshot.docs.map(async (doc) => {
    const data = doc.data();
    const imageUrl = data.imageBucket
      ? await getDownloadURL(data.imageBucket)
      : null;
    return {
      id: doc.id,
      ...data,
      imageUrl,
    };
  });

  const expenses = await Promise.all(expensePromises);
  return expenses;
}

// update expense
export function updateExpense(
  expenseId,
  uid,
  date,
  categoryId,
  name,
  description,
  amount,
  imageBucket
) {
  const expenseRef = doc(db, EXPENSES_COLLECTION, expenseId);
  updateDoc(expenseRef, {
    uid,
    date,
    categoryId,
    name,
    description,
    amount,
    imageBucket,
  });
}

// delete expense
export async function deleteExpense(expenseId) {
  await deleteDoc(doc(db, EXPENSES_COLLECTION, expenseId));
}
