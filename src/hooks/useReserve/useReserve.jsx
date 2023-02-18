import { doc, updateDoc } from "firebase/firestore";
import { useCallback } from "react";
import { db } from "../../config/firebase";

function useReserve() {
    const changeReserve = useCallback(async (option, id) => {
        const docRef = doc(db, "products", id);
        await updateDoc(docRef, { userId: option });
    }, []);

    return {
        changeReserve,
    };
}

export default useReserve;
