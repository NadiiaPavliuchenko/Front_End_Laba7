import React from 'react'
import {sklad} from '../products.js'
import '../App.css'

const Card_info = ({info}) => {
    const {photo, brand, tovar, price} = info;
    return(
        <div className={'GoodsCard'}>
            <img id={'photo'} src={photo} alt={tovar}/>
            <ul>
                <li id={'info'}>Name: {brand} {tovar}</li>
                <li id={'info'}>Price: {price} грн.</li>
            </ul>
        </div>
    );
}

function Cards(){
    return(
        <div className={"Goods"}>
            {sklad.map(product => <Card_info info={product} />)}
        </div>
    );
}

export default Cards