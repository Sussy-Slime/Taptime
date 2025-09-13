// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js"
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIfL-iRantJcFrPvt2hWEAhR1wMDIb_CY",
  authDomain: "xemphim-28586.firebaseapp.com",
  projectId: "xemphim-28586",
  storageBucket: "xemphim-28586.firebasestorage.app",
  messagingSenderId: "373001809935",
  appId: "1:373001809935:web:6c2189cb78310eba6b737a",
  measurementId: "G-2T3FJKHYD3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

document.getElementById("ticketTB").innerHTML = "";
let dataRender = "";
const querySnapshot = await getDocs(collection(db, "ticketss"));
querySnapshot.forEach((dec) => {
  console.log(dec.data());

  dataRender = `
  <div class="ticket">
<h3 class="title">Hóa đơn</h3>
<table>
    <tr>
        <th>Tên phim</th>
        <th>Thời gian</th>
        <th>Ngày</th>
    </tr>
    <tr>
        <td>${dec.data().name}</td>
        <td>${dec.data().time}</td>
        <td>${dec.data().date}</td>
    </tr>
</table>
<table>
    <tr>
        <th>Số lượng vé</th>
        <th>Tổng tiền</th>
    </tr>
    <tr>
        <td>${dec.data().ticket}</td>
        <td>${dec.data().price}</td>
    </tr>
</table>
</div>
 
  `;
  const htmlFilm = document.createElement('div')
  htmlFilm.innerHTML = dataRender
  document.getElementById("ticketTB").appendChild(htmlFilm)
});
