import React from "react";
import './preview-collection.styles.scss'
import PreviewItem from '../collection-item/collection-item.component.jsx'


const PreviewCollection = ({ title, items }) => {
    console.log(items)
    return (
        < div className="collection-preview" >
            <h1 className="title">{title} </h1>
            <div className="preview">
                {items.filter((item, index) => index < 4).map(item => (<PreviewItem key={item.id} item={item} />))}
            </div>
        </div >
    )
}
export default PreviewCollection;