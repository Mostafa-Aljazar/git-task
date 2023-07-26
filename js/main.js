// // // function sum(...args) {
// // //     let sum = 0;
// // //     for (let arg of args) sum += arg;
// // //     return sum;
// // // }

// // // let x = sum(4, 9, 16, 25, 29, 100, 66, 77);

// // // console.log(sum(x))
// // // console.log(x)


// // let a1 = [1, 2, 3, [4, 5], 6, [[7, 8], 9], 10]; //3
// // let a2 = [1, [[2, 3], 4, 5], 6, [[[7, 8], 9], 10]];//4
// // let a3 = [1];//1


// // // function order(ar) {

// // //     let o = 1;
// // //     for (let i = 0; i < ar.length; i++) {
// // //         if (!Array.isArray(a1[i])) {
// // //             continue;
// // //         }
// // //         else {
// // //             return order(ar[i]) + 1;
// // //         }
// // //     }

// // //     return 0 ;
// // // }

// // function findDepth(array) {
// //     if (!array) {
// //         return 0;
// //     } else if (Array.isArray(array[0])) {
// //         return 1 + findDepth(Array(array).slice(0, -1));
// //     } else {
// //         return 1;
// //     }
// // }

// // console.log(findDepth(a1)); // 3
// // console.log(findDepth(a2)); // 4
// // console.log(findDepth(a3)); // 1



// const label = document.getElementById('name');
// const maxlength = 10;

// label.addEventListener('input', (event) => {
//   if (event.target.value.length > maxlength) {
//     event.target.value = event.target.value.substring(0, maxlength);
//   }    console.log(event.target.value);

// });

let xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    let data = JSON.parse(xhr.responseText);
    console.log(data);
  } else {
    console.log(Error('NOt Found mo'))
  }
}

xhr.open("GET", `https://jsonplaceholder.typicode.com/users`);
xhr.send()


