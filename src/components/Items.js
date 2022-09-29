import { Card } from 'react-bootstrap';
import Items from './styles/Items.css';

const Item = ({ item }) => {
    return(
        <div>
            <Card border="secondary" className='h-100'>
                <Card.Body>
                    <Card.Title className='title'>{item.title}</Card.Title>
                    <Card.Img variant="top" src={item.imagesUrl}/>
                    <Card.Text>
                        {item.text}
                    </Card.Text>
                </Card.Body>
                <div className='m-4'>
                    <Card.Text className='price'><strong>{item.price}</strong></Card.Text>
                </div>
            </Card>
        </div>
    );
}

export default Item;