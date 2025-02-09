The solution is straightforward: always check if the snapshot exists before accessing its data.

```javascript
import { doc, getDoc, getFirestore } from "firebase/firestore";

const db = getFirestore();

async function getData(docId) {
  const docRef = doc(db, "yourCollection", docId);
  const snapshot = await getDoc(docRef);

  if (snapshot.exists()) {
    console.log("Document data:", snapshot.data());
    return snapshot.data();
  } else {
    console.log("Document does not exist.");
    return null; // Or handle the case appropriately
  }
}

// Example usage
getData("yourDocId").then(data => {
  // Process the data
});
```
This enhanced code safely handles cases where the document might not exist, preventing unexpected errors.