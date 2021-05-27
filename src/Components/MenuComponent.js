import React, { Component } from 'react';
import { Card, CardImg,
    CardBody, CardTitle } from 'reactstrap';


class Menu extends Component{

    constructor(props) {
        super(props);
    }



    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>                       
                        <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>                        
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardBody>
                    </Card>
                </div>
            )
        });

        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    <DishDetail dish={this.state.selectedDish} />
                </div>
            </div>
        );
    }

}

export default Menu;