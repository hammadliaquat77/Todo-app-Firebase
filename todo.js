  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  import { getFirestore, collection, addDoc, getDocs  } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDY3zwoBy9HfpsugbaS8BJbE4c-wf5BAl4",
    authDomain: "batch-11-3191d.firebaseapp.com",
    projectId: "batch-11-3191d",
    storageBucket: "batch-11-3191d.appspot.com",
    messagingSenderId: "1087219169012",
    appId: "1:1087219169012:web:5b0babdb382fa5bddb90a1",
    measurementId: "G-P1PS3T51ZB"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);

//   console.log("connected", db);
  


let input = document.getElementById('input-text');
let btn = document.getElementById('btn');
let ul = document.getElementById('ul');

    
btn.addEventListener('click', async function () {
  let text = input.value
  console.log(text);

  if (text) {
    
    try {
      const docRef = await addDoc(collection(db, "todo"), {
        todo: input.value,
      });
      input.value = ''
      ul.innerHTML += `<li> ${text} </li>` 
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    
    
    
    const querySnapshot = await getDocs(collection(db, "todo"));
    querySnapshot.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data()}`);
      let todos = doc.data()
      console.log(todos.todo);
      
    });
    
    
  }else{
    // // input.value =     ''
    // ul.innerHTML += `<li> ${text} </li>` 
    alert('Enter Your Message')
  }
  
  
})
