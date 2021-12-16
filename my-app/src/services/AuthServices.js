import firebase, {app} from "../firebaseConfig";


const auth = app.auth();

const db = app.firestore();

export default firebase;

export{
    auth,
    db
}