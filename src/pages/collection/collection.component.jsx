import React from 'react'
import './collection.styles.scss'
import CollectionItem from '../../component/collection-item/collection-item.component.jsx'
import { selectCollection } from '../../redux/shop/shop.selector.js'
import { connect } from 'react-redux'

const CollectionPage = ({ match, collection }) => {
    console.log(collection)
    return (
        <div className="collection-page">
            <div className="title">{collection.id}</div>
            <div className="items">{collection.items.map(item => <CollectionItem key={item.id} item={item} />)}</div>
        </div>
    )

}
const mapStateToProps = (state, ownProps) => {
    console.log(ownProps)
    console.log(state)
    return (
        {
            collection: selectCollection(ownProps.match.params.CollectionId)(state)
        }
    )
}

export default connect(mapStateToProps)(CollectionPage)