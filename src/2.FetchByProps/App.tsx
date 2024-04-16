import Child from "./2.FetchByProps/Child"
import { data } from "./2.FetchByProps/data" 

const App = () => {
  return (
    <div>
     {
      data.map((item)=>{
        return(
          <Child key={item.id} status={item.status} name={item.name}/>
        )
      })
     }
    </div>
  )
}

export default App
