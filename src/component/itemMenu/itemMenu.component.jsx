import React from 'react';
import './itemMenu.styles.scss'
import { withRouter } from 'react-router-dom'
export const ItemMenu = ({ title, imageUrl, size, linkUrl, history, match }) => {
    console.log(`${match.url}${linkUrl}`)
    return (
        <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)} >
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">Shop now</span>
            </div>
        </div >
    )
}
export default withRouter(ItemMenu);