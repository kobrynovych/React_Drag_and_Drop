// import React, {setState, useEffect} from 'react';
// import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';

// // export default function Search() {
// //   const defaultProps = {
// //     options: top100Films,
// //     getOptionLabel: (option) => option.title,
// //   };

// //   return (
// //     <div style={{ width: 300 }}>
// //       <Autocomplete
// //         {...defaultProps}
// //         id="auto-complete"
// //         autoComplete
// //         includeInputInList
// //         renderInput={(params) => <TextField {...params} label="autoComplete" margin="normal" />}
// //       />
// //     </div>
// //   );
// // }

// // // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
// // const top100Films = [
// //   { title: 'The Shawshank Redemption', year: 1994 },
// //   { title: 'The Godfather', year: 1972 },
// //   { title: 'Monty Python and the Holy Grail', year: 1975 },
// // ];


// var CONTACTS = [
//   {
//     id: 1,
//     name: 'Vladimir Putin',
//     phoneNumber:'+250936649',
//     email:'putinka@kremlin.ru',
//     image: 'https://media.giphy.com/media/iUb3TmNIZg3IY/giphy.gif'
//   }, {
//     id: 2,
//     name: 'Donald Trump',
//     phoneNumber: '+55096394466',
//     email:'makeamerica@great.boss',
//     image: 'https://media.giphy.com/media/3oKIPf1BaBDILVxbYA/giphy.gif'
//   }, {
//     id: 3,
//     name: 'Borac Obama',
//     phoneNumber: '+250976654433',
//     email:'boraobama@usa.com',
//     image: 'https://media.giphy.com/media/jfQYvIUkp3sQ0/giphy.gif'
//   }, 
//   {
//     id: 4,
//     name: 'Gomer Simpson',
//     phoneNumber: '+5432456784935',
//     email:'lazy@guy.sandwich',
//     image: 'https://media.giphy.com/media/Zk9mW5OmXTz9e/giphy.gif'
//   },
//   {
//     id: 5,
//     name: 'Brad Pitt',
//     phoneNumber: '+8368204',
//     email:'handsome@guy.best',
//     image: 'https://media.giphy.com/media/qpAI90fUO9hle/giphy.gif'
//   },
//   {
//   id: 6,
//   name: 'Boris Elcin',
//   phoneNumber: '+77386785',
//   email:'vodka@perestroika.com',
//   image: 'https://media.giphy.com/media/vwVt47fEqvuHS/giphy.gif'
//   },
//   {
//   id: 7,
//   name: 'Panda',
//   phoneNumber: '+536636785465',
//   email:'lazy@panda.uk',
//   image: 'https://media.giphy.com/media/ZeB4HcMpsyDo4/giphy.gif'
//   }
// ];
// const Contact = (props) => {
//     return ( 
//       <li className="contact">
//         <div className="contact-info">
//           <div className="contact-name">{props.name}</div>
//           <div className="contact-number">{props.phoneNumber}</div>
//           <div className="contact-email">{props.email}</div>
//         </div>
//       </li>
//     );
// }
// const Search = () => {

//   const [data, setData] = setState(CONTACTS);
//   const [dataFinish, setDataFinish] = setState('');
//   const [search, setSearch] = setState('');

//   const handleSearch = ({target}) => {
//     setSearch(target.value.toLowerCase());
//   }

//   useEffect(() => {
//     setDataFinish(data)
//   })

//   useEffect(() => {
//     setDataFinish(dataFinish.filter(el => el.name.toLowerCase().indexOf(search) !== -1))
//   }, [search]);

//     //   const searchData = search0.filter(el => el.name.toLowerCase().indexOf(searchQuery) !== -1);
//     // setSearch(searchData)

//     //   el.name.toLowerCase().match(searchString);

//     //   const searchValue = el.name.toLowerCase();
//     //   return searchValue.indexOf(searchQuery) !=-1;

//     return (
//       <div className="contacts">
//         <input type="text" className="search-field" onChange={handleSearch}/>
//         <ul className="contact-list">
//           {dataFinish.map(el => (
//               <Contact 
//                 key={el.id} 
//                 name={el.name}
//                 phoneNumber={el.phoneNumber}
//                 email={el.email}
//               />
//           ))}
//         </ul>
//       </div>
//     )
// };
// export default Search;