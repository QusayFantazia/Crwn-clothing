import React from 'react'
import './collection-item.styles.scss'
import CustomButton from '../custom-button/custom-button.component.jsx'
import { addItem } from '../../redux/cart/cart.actions.js'
import { connect } from 'react-redux'

const CollectionItem = ({ item, addItem }) => {
    // the onclick here should be in the button according to the course rath tha in the upper div
    return (
        <div className="collection-item" onClick={() => addItem(item)} >
            <div className="image" style={{ backgroundImage: `url(${item.imageUrl})` }}>

            </div>
            <div className="collection-footer ">
                <span className="name">{item.name}</span>
                <span className="price">{item.price}</span>

            </div>
            <CustomButton inverted>Add To Cart</CustomButton>

        </div>
    )

}
const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(CollectionItem);