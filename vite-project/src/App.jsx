import {Provider} from "react-redux"
import './App.css'
import UsersListPage from "./pages/usersListPage"
import store from "./core/store/store"

function App() {
 

  return (
   <Provider store={store}>
    <UsersListPage/>
   </Provider>
  )
}

export default App
