import React from 'react'
import './collection-overview.styles.scss'
import PreviewCollection from './../../component/preview-collection/preview-collection.component'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsForPreview } from './../../redux/shop/shop.selector.js'
import { connect } from 'react-redux'

const CollectionOverview = ({ collections }) => (
    <div className="collections-overview">
        {collections.map(({ id, ...otherCollectionPros }) => (<PreviewCollection key={id} {...otherCollectionPros} />))}
    </div >
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview)