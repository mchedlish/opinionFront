import React from 'react';
import Category from '../../components/crud/Category'


const CategoryTag = () => {
    return (
        <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Manage Categories and Tags</h2>
                        </div>
                        <div className="col-md-6">
                            <Category/>
                        </div>
                        <div className="col-md-6">
                            <p>tag</p>
                        </div>
                    </div>
                </div>
    );
};

export default CategoryTag;