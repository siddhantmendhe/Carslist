import { useSelector,useDispatch } from "react-redux";
import {removeCar} from '../store'
function CarList(){
    const dispatch=useDispatch();
    const {name, cars}= useSelector(({form,cars:{data, searchTerm}})=>{
        const filteredCars=data.filter((car)=>  car.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return{
            cars:filteredCars,
            name:form.name
        }


    })

    const handleDelete=(car)=>{
        //
        dispatch(removeCar(car.id))
    }

    const renderedCars=cars.map((car)=>{
        //Should car be BOLD
        const bold=name&&car.name.toLowerCase().includes(name.toLowerCase());
        return(
            <div key={car.id} className={`panel ${bold && 'bold'}`}>
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