import React from 'react';
import { Route } from 'react-router-dom'
import CollectionOverview from './../../component/collection-overview/collection-overview.component.jsx'
import CollectionPage from './../collection/collection.component.jsx'


const ShopPage = ({ match }) => (
    <div>
        <Route exact path={`${match.path}`} component={CollectionOverview}></Route>
        <Route path={`${match.path}/:CollectionId`} component={CollectionPage}></Route>
    </div >

);



export default ShopPage;
