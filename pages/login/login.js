


// document.getElementById("submitBtn").addEventListener("click", function () {
//     // Mendapatkan nilai input username dan password
//     const username = document.getElementById("txt-input").value;
//     const password = document.getElementById("pwd").value;
  
//     // Cek apakah username dan password adalah "admin"
//     if (username === "admin"  && password === "admin") {
//       // Pindah ke halaman lain
//       window.location.href = "/pages/product/product.html"; // Ganti dengan halaman tujuan
//     } else {
//       // Jika salah, tampilkan alert
//       alert("Username atau Password salah!");
//     }
//   });
  

// // Mengambil elemen form dan tombol
// const submitBtn = document.getElementById("submitBtn");
// const signUpBtn = document.getElementById("signUpBtn");
// const formTitle = document.getElementById("formTitle");
// const formDesc = document.getElementById("formDesc");

// let isSignUp = false; // Status apakah sedang dalam mode sign up

// // Event handler untuk tombol Log In / Sign Up
// submitBtn.addEventListener("click", function () {
//   const username = document.getElementById("txt-input").value;
//   const password = document.getElementById("pwd").value;

//   if (isSignUp) {
//     // Proses Sign Up: Simpan username dan password di localStorage
//     localStorage.setItem("username", username);
//     localStorage.setItem("password", password);
//     alert("Sign Up berhasil! Silakan login.");

//     // Ubah kembali ke mode login setelah sign up berhasil
//     isSignUp = false;
//     formTitle.innerText = "Log In";
//     formDesc.innerText = "login here using your username and password";
//     submitBtn.innerText = "Log In";
//   } else {
//     // Proses Log In: Cek username dan password dari localStorage
//     const savedUsername = localStorage.getItem("username");
//     const savedPassword = localStorage.getItem("password");

//     if (username === savedUsername && password === savedPassword) {
//       window.location.href = "/pages/product/product.html"; // Arahkan ke halaman dashboard setelah login berhasil
//     } else {
//       alert("Username atau Password salah!");
//     }
//   }
// });

// // Event handler untuk tombol Sign Up
// signUpBtn.addEventListener("click", function () {
//   // Ubah form menjadi mode Sign Up
//   isSignUp = true;
//   formTitle.innerText = "Sign Up";
//   formDesc.innerText = "create your account by entering username and password";
//   submitBtn.innerText = "Sign Up";
// });


const loginBtn = document.getElementById("loginBtn");
const signUpBtn = document.getElementById("signUpBtn");
const signUpSubmitBtn = document.getElementById("signUpSubmitBtn");
const formTitle = document.getElementById("formTitle");
const formDesc = document.getElementById("formDesc");

let isSignUp = false; // Status apakah sedang dalam mode sign up

// Event handler untuk tombol Log In
loginBtn.addEventListener("click", function () {
  const username = document.getElementById("txt-input").value;
  const password = document.getElementById("pwd").value;

  if (!isSignUp) {
    // Proses Log In: Cek username dan password dari localStorage
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (username === savedUsername && password === savedPassword) {
      window.location.href = "/pages/product/product.html"; // Arahkan ke halaman dashboard setelah login berhasil
    } else {
      alert("Username atau Password salah!");
    }
  }
});

// Event handler untuk tombol Sign Up Submit
signUpSubmitBtn.addEventListener("click", function () {
  const username = document.getElementById("txt-input").value;
  const password = document.getElementById("pwd").value;

  // Proses Sign Up: Simpan username dan password di localStorage
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  alert("Sign Up berhasil! Silakan login.");

  // Ubah kembali ke mode login setelah sign up berhasil
  isSignUp = false;
  formTitle.innerText = "Log In";
  formDesc.innerText = "login here using your username and password";
  loginBtn.style.display = "block"; // Tampilkan kembali tombol Log In
  signUpSubmitBtn.style.display = "none"; // Sembunyikan tombol Sign Up
});

// Event handler untuk tombol Sign Up
signUpBtn.addEventListener("click", function () {
  // Ubah form menjadi mode Sign Up
  isSignUp = true;
  formTitle.innerText = "Sign Up";
  formDesc.innerText = "create your account by entering username and password";
  loginBtn.style.display = "none"; // Sembunyikan tombol Log In
  signUpSubmitBtn.style.display = "block"; // Tampilkan tombol Sign Up
});



