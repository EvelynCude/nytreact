import React, { Component } from 'react';

class SearchCard extends Component {
    state = {
        topic: "Food",
        startYear: "2017",
        endYear: "2017"
    };

    handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const searchData = {
            topic: this.state.topic,
            startYear: this.state.startYear,
            endYear: this.state.endYear
        }

        // console.log(searchData);
        this.setState({ topic: "", startYear: "", endYear: "" })
        this.props.submitSearch(searchData);
    };

    render() {
        return (
            <div className="row">
                <div className="col-md">
                    <div id="searchCard" className="card">
                        <h4 className="card-header text-center">Search</h4>

                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Search Topic</label>
                                    <input name="topic" type="text" value={this.state.topic} className="form-control" id="inputSearchTerm" onChange={this.handleInputChange} placeholder="Enter a topic to search for" />
                                </div>
                                <div className="form-group">
                                    <label>Start Year</label>
                                    <input name="startYear" type="text" value={this.state.startYear} className="form-control" id="inputStartingYear" onChange={this.handleInputChange} placeholder="Start Year" />
                                </div>
                                <div className="form-group">
                                    <label>End Year</label>
                                    <input name="endYear" type="text" value={this.state.endYear} className="form-control" id="inputEndYear" onChange={this.handleInputChange} placeholder="End Year" />
                                </div>
                                <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default SearchCard;