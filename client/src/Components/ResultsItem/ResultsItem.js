import React, { Component } from 'react';
import API from '../../Utils/API.js';

class ResultsItem extends Component {

    saveArticle = (event) => {
        const articleData = {
            headline: this.props.headline,
            date: this.props.date,
            url: this.props.url
        }
        console.log(articleData);
        API.saveArticle(articleData);
    }

    render() {
        return (
            <div className="card result-item">
                <div className="card-body">
                    <h5 className="card-title ">
                       <a href={this.props.url}>{this.props.headline}</a></h5>
                    <p className="card-text">ArticleDate: {this.props.date}</p>
                    <button onClick={this.saveArticle} className="btn btn-primary">Save</button>
                </div>
            </div>
        )
    }
}

export default ResultsItem;