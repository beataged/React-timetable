import firebase from "../firebaseConfig";

export const getAllWorks = (onlyWorkChanged)=>{
    //gauti visus duomenis
    firebase
    .firestore()
    .collection('times')
    .onSnapshot((snapshot)=>{
        const newWork = snapshot.docs.map((doc)=>({
            id:doc.id,
            ...doc.data()
        }))
        onlyWorkChanged(newWork)
    })
}

export const addWork = (data)=>{
    //prideti darba
    firebase
    .firestore()
    .collection('times')
    .add(data)
}

export const showById = (item, id)=>{
    firebase
    .firestore()
    .collection('times')
    .doc(id)
    .get()
   // .then(()=>{item(docRef.data())})
}

export const deleteWork = (id)=>{
firebase
.firestore()
.collection('times')
.doc(id)
.delete()
}

export const updateWork = ()=>{

}