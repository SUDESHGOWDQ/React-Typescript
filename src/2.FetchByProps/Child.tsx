import {DataProps} from './data_type'
import './Child.css'

const Child = (props:DataProps) => {
  return (
    <div>
      <p>{props.name} : <span className={`data ${props.status}`}>{props.status}</span></p>
      
    </div>
  )
}

export default Child
