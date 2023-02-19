import { doc, updateDoc } from "firebase/firestore";
import { useCallback } from "react";
import { db } from "../../config/firebase";

function useReserve() {
    const changeReserve = useCallback(async (uid, id, status) => {
        const docRef = doc(db, "products", id);
        await updateDoc(docRef, { userId: uid, productStatus: status });
    }, []);

    return {
        changeReserve,
    };
}

export default useReserve;
