import { useSelector,useDispatch } from "react-redux";
import {removeCar} from '../store'
function CarList(){
    const dispatch=useDispatch();
    const cars= useSelector(state=>{
        return state.cars.data;
    })

    const handleDelete=(car)=>{
        //
        dispatch(removeCar(car.id))
    }

    const renderedCars=cars.map((car)=>{
        return(
            <div key={car.id} className="panel">
                <p>
                    {car.name} - ${car.cost}
                </p>
                <button 
                className="button is-danger" onClick={()=>{ handleDelete(car)}}>
                    Delete
                </button>
            </div>
        )
    })
    console.log(cars);
    return <div className="car-list">
        {renderedCars}
    </div>
}

export default CarList; 