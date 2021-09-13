import React, { useState } from 'react'
import DetailsInput from './component/DetailsInput'
import DetailsList from './component/DetailsList'
import './App.css'

function App(props) {
  const [users, setUser] = useState([]);

  function addUser(addUpToUser) {
    setUser([...users, addUpToUser])
  }
  return(
    <div>
       <div className='app-bg'>
        <div id="para">React BookStore App</div>
        <DetailsInput addUser={addUser}/>
        <DetailsList printUser={users}/>
      </div>
    </div>
  )
}

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {users: []}
//   } 

//   AddUser(addUpToUser){
//     //make copy of the current users state and add a new user
//     this.setState([...this.state.users, this.addUpToUser])
//   }

//   render() {
//     return (
//       <div>
//         <DetailsInput addUser={this.AddUser}/>
//         {/* <ContactList PrintUser={user}/> */}
//       </div>
//     )
//   }
// }

export default App;