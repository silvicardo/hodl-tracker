import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "../../../firebase/initFirebase";
import { useMemo } from "react";

export function useFirebaseData<K>(collectionName: string) {
  const [firebaseData, isDataLoading, fetchError] = useCollection<K>(
    firebase.firestore().collection(collectionName),
    {}
  );

  return useMemo(() => {
    let readableData: K[] = [];
    if (!isDataLoading && firebaseData) {
      readableData = firebaseData.docs.map((doc) => (doc.data() ? doc.data() : ({} as K)));
    }
    return { readableData, isDataLoading, fetchError };
  }, [isDataLoading, firebaseData, fetchError]);
}
