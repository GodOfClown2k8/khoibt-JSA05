async function countdown(s){
    while (s > 0) {
        console.log(s);
        await new Promise(
            resolve => setTimeout(resolve,1000)); s--;
            
        }
        console.log("đếm ngược kết thúc");
    }
countdown(5)


// Nếu đối tượng người dùng có trường thông tin :
// const user = {
//     name: "John Doe",
//     age: 30,
//     email: "john.doe@example.com",
//     isActive: true
//   };
// thì chuỗi JSON sẽ có dạng : 
// { 
//  "name": "John Doe",
//  "age": 30, 
//  "email": "john.doe@example.com" 
// }

// còn nếu ở : 
// const user = {
//     name: "John Doe",
//     age: 30,
//     address: {
//       street: "123 Main St",
//       city: "New York",
//       country: "USA"
//     }
//   };
// thì chuỗi có dạng : 
// {
//     "name": "John Doe",
//     "age": 30,
//     "address": {
//       "street": "123 Main St",
//       "city": "New York",
//       "country": "USA"
//     }
//   }
    