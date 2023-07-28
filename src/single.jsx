import './single.css';
import { Link } from 'react-router-dom';

export default function Single(props)
{
    return(
        <div className="single">
            <div className="photo">
                <img src={props.img} alt="" />
            </div>
            <p className="title">{props.title}</p>
            <div className="ingredients">
                <span>Ingredients</span><br />
                {props.ingredients.map((i)=>(
                    <span>{i.food} | </span>
                ))}
            </div>
            <a href={props.u} target="_blank">Full Recipe</a>
            </div>
    )
}