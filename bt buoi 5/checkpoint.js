// function tinhGiaiThua(n) {
//     let giaiThua = 1;
//     for (let i = 1; i <= n; i++) {
//       giaiThua *= i;
//     }
//     return giaiThua;
    
//   }
  
//   let soNhap = 5;
//   console.log("Giai thừa của", soNhap, "là:", tinhGiaiThua(soNhap));

// tinhGiaiThua(5)



// function veTamGiacCanRong(row) {
//     let tamGiac = "";
//     for (let i = 1; i <= row; i++) {
      
//       for (let j = 1; j <= row - i; j++) {
//         tamGiac += " ";
//       }
      
      
//       for (let j = 1; j <= 2 * i - 1; j++) {
//         if (j === 1 || j === 2 * i - 1 || i === row) { 
//           tamGiac += "*";
//         } else {
//           tamGiac += " "; 
//         }
//       }
      
//       tamGiac += "\n"; 
//     }
    
//     console.log(tamGiac);
//   }
  
//   veTamGiacCanRong(5); 

function Submit() {
  
  var name = document.getElementById('username').value;
  var pass = document.getElementById('password').value;
  
 
  localStorage.setItem('name', name);
  localStorage.setItem('pass', pass);
}

var submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', Submit);
  
function Form() {
  var inputField = document.getElementsByClassName("input").value;
  
  if (inputField.trim() === "") {
    alert("Vui lòng nhập thông tin.");
    return false;
  }
}