import { db } from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

const CATEGORY_COLLECTION = "categories";
const EXPENSES_COLLECTION = "expenses";

export function addCategory(uid, name, color) {
  addDoc(collection(db, CATEGORY_COLLECTION), {
    uid,
    name,
    color,
  });
}


