import React from 'react';
import ResultsItem from '../ResultsItem'

const ResultsCard = ({ children }) =>
    <div className="row">
        <div className="col-md">
            <div id="resultsCard" className="card">
                <h4 id="resultsCardHeader" className="card-header text-center">Results</h4>
                <div className="card-body">
                    {children[0] ?
                        children.slice(0,5).map(article => {
                            return (
                                <ResultsItem key={article._id} url={article.web_url} date={article.pub_date} headline={article.headline.main} />
                            )
                        }) :
                        <h5>Please Enter a Search</h5>
                    }
                </div>
            </div>
        </div>
    </div>;

export default ResultsCard;