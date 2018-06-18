import React from 'react';
import SavedItem from '../SavedItem/'

const SavedCard = (props) =>
    <div className="row">
        <div className="col-md">
            <div id="savedArticlesCard" className="card">
                <h4 className="card-header text-center">Saved Articles</h4>
                <div className="card-body">
                    {props.children[0] ?
                        props.children.map(article => {
                            return (
                                <SavedItem loadArticles={props.loadArticles} key={article._id} id={article._id} url={article.url} date={article.date} headline={article.headline} />
                            )
                        }) :
                        <h4>No Saved Articles Found</h4>
                    }
                </div>
            </div>
        </div>
    </div>;

export default SavedCard;