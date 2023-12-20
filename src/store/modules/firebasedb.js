//import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  collection,
  getDocs,
  //getDoc,
  //doc,
  //addDoc,
  where,
  query,
  //deleteDoc,
  //updateDoc,
  //serverTimestamp,
  //orderBy,
} from "firebase/firestore";
import { db } from "@/main.js";

export const actionTypes = {
  getNotesByUserId: "[firedb] getNotesByUserId",
};

export const mutationType = {
  setNotes: "[firedb] setNotes",
};

const state = {
  notes: undefined,
};
const mutations = {
  [mutationType.setNotes](state, payload) {
    state.notes = payload;
  },
};

const actions = {
  [actionTypes.getNotesByUserId](context, { uid }) {
    return new Promise((resolve) => {
      console.log("start");
      const q = query(collection(db, "notes"), where("uid", "==", uid));
      getDocs(q).then((result) => {
        const notes = result.docs.map((doc) => doc.data());
        context.commit(mutationType.setNotes, notes);
        resolve();
      });
    });
  },
};
export default {
  actions,
  mutations,
  state,
};
