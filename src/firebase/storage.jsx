/* eslint-disable no-unused-vars */
import { format } from "date-fns";
import {
  ref,
  uploadBytes,
  getDownloadURL as getStorageDownloadURL,
  deleteObject,
} from "firebase/storage";
import { storage } from "./firebase";

const BUCKET_URL = "gs://expense-tracker-5b173.appspot.com";

export async function uploadImage(image, uid) {
  const currentDate = new Date();
  const formattedDate =
    currentDate.getFullYear() +
    "-" +
    (currentDate.getMonth() + 1).toString().padStart(2, "0") +
    "-" +
    currentDate.getDate().toString().padStart(2, "0");
  const bucket = `${BUCKET_URL}/${uid}/${formattedDate}.jpg`;
  const storageRef = ref(storage, bucket);
  await uploadBytes(storageRef, image);
  return bucket;
}


export async function getDownloadURL(bucket) {
  return await getStorageDownloadURL(ref(storage, bucket));
}

export async function replaceImage(image, bucket) {
  await uploadBytes(ref(storage, bucket), image);
}

export function deleteImage(bucket) {
  deleteObject(ref(storage, bucket));
}
