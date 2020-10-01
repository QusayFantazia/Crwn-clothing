import React from 'react'
import ItemMenu from "./../itemMenu/itemMenu.component.jsx"
import './menuDirectory.styles.scss'
import { sectionsSelector } from './../../redux/directory/director-reducer.selctor.js'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'


const MenuDirectory = ({ sections }) => {
    console.log(sections)
    return (
        <div className="directory-menu">

            {sections.map(({ id, title, imageUrl, linkUrl }) =>
                <ItemMenu key={id} title={title} imageUrl={imageUrl} linkUrl={linkUrl} />)}

        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    sections: sectionsSelector
})
export default connect(mapStateToProps, null)(MenuDirectory);
