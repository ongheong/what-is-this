// 챌린지 1
// const person = {
//     name: 'Gregorio Y. Zara',
//     theme: {
//       backgroundColor: 'black',
//       color: 'pink'
//     }
//   };
  
//   export default function TodoList() {
//     return (
//       <div style={person.theme}>
//         <h1>{person.name}'s Todos</h1>
//         <img
//           className="avatar"
//           src="https://i.imgur.com/7vQD0fPs.jpg"
//           alt="Gregorio Y. Zara"
//         />
//         <ul>
//           <li>Improve the videophone</li>
//           <li>Prepare aeronautics lectures</li>
//           <li>Work on the alcohol-fuelled engine</li>
//         </ul>
//       </div>
//     );
//   }
  
// 챌린지 2
// const person = {
//     name: 'Gregorio Y. Zara',
//     theme: {
//       backgroundColor: 'black',
//       color: 'pink'
//     },
//     url: 'https://i.imgur.com/7vQD0fPs.jpg'
//   };
  
//   export default function TodoList() {
//     return (
//       <div style={person.theme}>
//         <h1>{person.name}'s Todos</h1>
//         <img
//           className="avatar"
//           src={person.url}
//           alt="Gregorio Y. Zara"
//         />
//         <ul>
//           <li>Improve the videophone</li>
//           <li>Prepare aeronautics lectures</li>
//           <li>Work on the alcohol-fuelled engine</li>
//         </ul>
//       </div>
//     );
//   }

// 챌린지 3
const baseUrl = 'https://i.imgur.com/';
const person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        // src="{baseUrl}{person.imageId}{person.imageSize}.jpg"
        src={baseUrl + person.imageId + person.imageSize + '.jpg'}
        alt={person.name}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
