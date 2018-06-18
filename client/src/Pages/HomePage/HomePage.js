import React, { Component } from 'react';
import SearchCard from '../../Components/SearchCard';
import ResultsCard from '../../Components/ResultsCard';
import SavedCard from '../../Components/SavedCard';
import API from '../../Utils/API.js';

class HomePage extends Component {
    state = {
        results: [],
        articles: []
    };

    componentDidMount() {
        this.loadArticles();
    };

    loadArticles = () => {
        API.getArticles()
            .then(res => {
                this.setState({ articles: res.data })
            })
            .catch(err => console.log(err));
    };

    submitSearch = (searchData) => {
        console.log(searchData);

        API.searchArticles(searchData)
            .then(res => {
                this.setState({ results: res.data.response.docs });
                console.log(this.state.results)
            }
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="container">
                <div>
                    <SearchCard submitSearch={this.submitSearch} />
                </div>
                <div>
                    <ResultsCard>{this.state.results}</ResultsCard>
                </div>
                <div>
                    <SavedCard loadArticles={this.loadArticles}>
                        {this.state.articles}
                    </SavedCard>
                </div>
            </div>
        );
    };
};

export default HomePage;