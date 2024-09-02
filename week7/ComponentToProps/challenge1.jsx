//내 코드
// import { getImageUrl } from './utils.js';

// const scientists = [
//     {
//     name: "Maria Skłodowska-Curie",
//     profession: "physicist and chemist",
//     awardsCnt: "4",
//     awardsContent: "Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal",
//     discovered: "polonium (chemical element)",
//     imageUrl: "szV5sdG"
// },
// {
//     name: "Katsuko Saruhashi",
//     profession: "geochemist",
//     awardsCnt: "4",
//     awardsContent: "Miyake Prize for geochemistry, Tanaka Prize",
//     discovered: "a method for measuring carbon dioxide in seawater",
//     imageUrl: "YfeOqp2"
// },
// ];

// function Profile({props}) { //구조분해할당으로 props 넘기기
//     return (
//         <section className="profile">
//         <h2>{props.name}</h2>
//         {/*아바타로 빼기*/}
//         <img
//           className="avatar"
//           src={getImageUrl(props.imageUrl)}
//           alt={props.name}
//           width={70}
//           height={70}
//         />
//         <ul>
//           <li>
//             <b>Profession: </b> 
//             {props.profession}
//           </li>
//           <li>
//             <b>Awards: {props.awardsCnt} </b> 
//             ({props.awardsContent})
//           </li>
//           <li>
//             <b>Discovered: </b>
//             {props.discovered}
//           </li>
//         </ul>
//       </section>
//     );
// }

// export default function Gallery() {
//     //spread로 배열 안의 객체 넘기기
//     //const scientistProfile = scientists.map((scientist) => <Profile {...scientist}/>);

//   return (
//     <div>
//       <h1>Notable Scientists</h1>
//       <Profile {...scientists[0]} />
//       <Profile {...scientists[1]} />
//     </div>
//   );
// }

//정답 코드
import { getImageUrl } from './utils.js';

function Profile({ person, imageSize = 70 }) {
  const imageSrc = getImageUrl(person)

  return (
    <section className="profile">
      <h2>{person.name}</h2>
      <img
        className="avatar"
        src={imageSrc}
        alt={person.name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li>
          <b>Profession:</b> {person.profession}
        </li>
        <li>
          <b>Awards: {person.awards.length} </b>
          ({person.awards.join(', ')})
        </li>
        <li>
          <b>Discovered: </b>
          {person.discovery}
        </li>
      </ul>
    </section>
  )
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile person={{
        imageId: 'szV5sdG',
        name: 'Maria Skłodowska-Curie',
        profession: 'physicist and chemist',
        discovery: 'polonium (chemical element)',
        awards: [
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          'Davy Medal',
          'Matteucci Medal'
        ],
      }} />
      <Profile person={{
        imageId: 'YfeOqp2',
        name: 'Katsuko Saruhashi',
        profession: 'geochemist',
        discovery: 'a method for measuring carbon dioxide in seawater',
        awards: [
          'Miyake Prize for geochemistry',
          'Tanaka Prize'
        ],
      }} />
    </div>
  );
}



