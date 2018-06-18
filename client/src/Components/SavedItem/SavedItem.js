import React, { Component } from 'react';
import API from '../../Utils/API.js';

class SavedItem extends Component {

    deleteClick = (event) => {
        console.log('To delete:', this.props.id);
        API.deleteArticle(this.props.id)
            .then(() => {
                this.props.loadArticles();
            });
    }

    render() {
        return (
            <div className="card result-item">
                <div className="card-body d-flex align-items-center justify-content-between">
                    <a href={this.props.url}>{this.props.headline}</a>
                    <button onClick={this.deleteClick} className="btn btn-danger">Delete</button>
                </div>
            </div>
        )
    }
}

export default SavedItem;