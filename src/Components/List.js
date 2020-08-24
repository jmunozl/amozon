import React from 'react';
import Item from './Item';
import '../styles/List.css';

function List(props){
    return(
        <div className="list">
            {props.items.map(item =>
                <Item 
                    key={item.id} 
                    id={item.id} 
                    title={item.title} 
                    image={item.image} 
                    rating={item.rating} 
                    onRemove={props.onRemove}
                    onUpdateRating={props.onUpdateRating} />
            )}
        </div>
    );
}


export default List;