import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { MyJordans } from './productsList/MyJordans.js';
import ItemList from './ItemList.js';

function ItemListContainer(props){
    
    const [jordans, setJordans] = useState([])

    const getJordans = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                return resolve(MyJordans);
            },2000);
        })
    }

    useEffect( () => {
        getJordans().then( (res) => {
            setJordans(res)
        }).finally( () => {
            console.log("Mis Jordans")
        })
    }, [])

    return (
        <Container className='mb-5'>
            {props.gretting}
            <ItemList items={jordans}></ItemList>
        </Container>
    );
}

export default ItemListContainer;