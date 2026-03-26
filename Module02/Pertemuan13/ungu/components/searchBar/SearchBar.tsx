// import style from './searchbar.module.css'
// import Checkbox from '@mui/material/Checkbox'
// import TextField from '@mui/material/TextField'
// import { useState } from 'react'
// import { Button, Box } from '@mui/material'

// export default function SearchBar() {
//   const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' } } }
//   const [newDescription, setNewdescription] = useState('')
//   const [allTodos, setTodos] = useState([])

//   const handleAddTodo = () => {
//     setTodos([...allTodos, { description: newDescription }])
//     setNewdescription('')
//   }

//   return (
//     <>
//       <div className={style.kotak}>
//         <div className={style.checkkiri}>
//           <Checkbox {...label} />
//         </div>

//         <div className={style.checkkanan}>
//              <Box
//                 component="form"
//                 sx={{ '& > :not(style)': { m: 1, width: '400px' } }}
//                 noValidate
//                 autoComplete="off"
//                 >
//           <TextField
//             value={newDescription}
//             onChange={(e) => setNewdescription(e.target.value)}
//             label="Create a new Todo"
//             variant="outlined"
//           />
//           </Box>
//         </div>

//         <div className={style.button}>
//           <Button onClick={handleAddTodo} variant="contained">
//             Add
//           </Button>
//         </div>

//             {allTodos.map((item, index) => {
//                 return(
//                     <div className={style.kotak} key={index}>
//                         <div className={style.kotak1}>
//                         <div className={style.checkkiri}>
//                             <Checkbox {...label} />
//                         </div>
//                         <div>
//                                 <h3>{item.description}</h3>
//                             </div>
//                         </div>
//                     </div>
//                  )
//             }

//       </div>
//     </>
//   )

// }
