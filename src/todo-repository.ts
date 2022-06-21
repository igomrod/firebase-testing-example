import { Firestore } from "firebase-admin/firestore";

export interface Todo {
    id: string
    title: string
    description: string
}

const COLLECTION_NAME = "todos"

export const save: (db: Firestore) => (todo: Todo) => Promise<void> = (db: Firestore) => async (todo: Todo) => {
    try {
        const docRef = db.collection(COLLECTION_NAME)
        await docRef.add(todo)
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

export const get_all: (db: Firestore) => () => Promise<any> = (db: Firestore) => async () => {
    const docRef = db.collection(COLLECTION_NAME)
    const snapshot = await docRef.get()

    return snapshot.docs.map(doc => doc.data())
}
