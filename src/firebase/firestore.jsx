import { db } from "./firebase";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

const CATEGORY_COLLECTION = "categories";
const EXPENSES_COLLECTION = "expenses";


// categories CRUD
// creating category
export function addCategory(uid, name, color) {
  addDoc(collection(db, CATEGORY_COLLECTION), {
    uid,
    name,
    color,
  });
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


