// Just like in order to access our firebase database, storage and
// authentication in our frontend we have to do some configuration similarly
// in order to access our firebase database, storage and authentication in
// our backend we have to do some configurations as well.

// For the usage and configuration we have to install the firebase-admin package.
import admin from "firebase-admin";

// We also need a service account that we need to download from
// firebase console.

// Now we are importing the key from the file.
import serviceAccount from "./serviceAccountKey.json" assert { type: "json" };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// This will allow us to use our firebase database, storage and authentication in our server files.
export default admin;
