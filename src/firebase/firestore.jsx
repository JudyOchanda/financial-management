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
  orderBy,
} from "firebase/firestore";

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
export function addExpense(uid, date, categoryId, amount, imageBucket) {
  addDoc(collection(db, EXPENSES_COLLECTION), {
    uid,
    date,
    categoryId,
    amount,
    imageBucket,
  });
}

// get expense
export async function getExpenses(uid) {
  const expensesRef = collection(db, EXPENSES_COLLECTION);
  const querySnapshot = await getDocs(
    query(expensesRef, where("uid", "==", uid), orderBy("date", "desc"))
  );

  let expenses = [];
  querySnapshot.forEach((doc) => {
    const expense = doc.data();
    expenses.push({
      ...expense,
      id: doc.id,
    });
  });

  return expenses; // Added to return the expenses array
}
