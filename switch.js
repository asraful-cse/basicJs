// var foo = 0;
// switch (foo) {
//   case -1:
//     console.log('negative 1');
//     break;
//   case 0: // foo is 0 so criteria met here so this block will run
//     console.log(0);
//     // NOTE: the forgotten break would have been here
//   case 1: // no break statement in 'case 0:' so this case will run as well
//     console.log(1);
//     break; // it encounters this break so will not continue into 'case 2:'
//   case 2:
//     console.log(2);
//     break;
//   default:
//     console.log('default');
// }



// var Animal = 'Giraffe';
// switch (Animal) {
//   case 'Cow':
//   case 'Giraffe':
//   case 'Dog':
//   case 'Pig':
//     console.log('This animal will go on Noah\'s Ark.');
//     break;
//   case 'Dinosaur':
//   default:
//     console.log('This animal will not.');
// }



// //multiple switch:::::::::::::::::::::
// const expr = 'Papayas';
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }

