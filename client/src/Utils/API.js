import axios from "axios";

export default {
    // Gets all books
    getArticles: function () {
        return axios.get("/api/articles");
    },
    // Deletes the book with the given id
    deleteArticle: function (id) {
        return axios.delete("/api/articles/" + id);
    },
    // Saves an article to the database
    saveArticle: function (articleData) {
        console.log(articleData);
        return axios.post("/api/articles", articleData);
    },
    // Searches for articles
    searchArticles: function (searchData) {

        return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?", {
            params: {
                'api-key': "0d3347237fb545488ef1adf6e34df19b",
                'q': searchData.topic,
                'begin_date': searchData.startYear + "0101",
                'end_date': searchData.endYear + "1231"
            }
        });
    }
};