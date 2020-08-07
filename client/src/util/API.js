import axios from "axios";

const googleBaseURL = "https://www.googleapis.com/books/v1/volumes?q=";
const keySection = "&key=" + process.env.REACT_APP_APIKey;

export default {
  // Get all books
  getAllBooks: function() {
    return axios.get("/api/books");
  },
  // Delete a book
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  saveBook: function(bookObj) {
    return axios.post("/api/books", bookObj);
  },
  search: function(searchTerm) {
    return axios.get(googleBaseURL + searchTerm + keySection);
  }
};
