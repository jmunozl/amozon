import React from 'react';
import '../styles/Item.css';

class Item extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            title: '',
            image: '',
            rating: 1,
            stars: []
        }

        this.onRemove = this.onRemove.bind(this);
        this.onChangeRating = this.onChangeRating.bind(this);
    }

    componentDidMount(){
        this.setState({
            id: this.props.id,
            title: this.props.title,
            image: this.props.image,
            rating: parseInt(this.props.rating),
            stars: Array(parseInt(this.props.rating)).fill(1)
        });
    }

    onRemove(e){
        console.log(e);
        this.props.onRemove(this.props.id);
    }

    onChangeRating(e){
        const rating = parseInt(e.target.value)
        this.setState({
            rating: parseInt(e.target.value),
            stars: Array(parseInt(e.target.value)).fill(1)
        });

        this.props.onUpdateRating({id: this.state.id, title: this.state.title, image: this.state.image, rating: rating});
    }

    render(){
        return(
            <div key={this.state.id} className="item">

                <div className="image"><img alt={this.state.title}  src={'img/' + this.state.image} width="100%" /></div>
                <div className="title">{this.state.title}</div>
                <div className="rating">
                    <p>
                    {this.state.stars.map((x,index) =>

                      <img key={index} alt="This is start" src='img/star.png' width='32' />
                    )}
                    </p>
                    Calificación: 
                    <select value={this.state.rating} onChange={this.onChangeRating}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="actions">
                    <button onClick={this.onRemove}>Eliminar</button>
                </div>
            </div>
        );
    }

}

export default Item;