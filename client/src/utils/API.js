import axios from 'axios';

export default {
    addBook: function(book){
       return axios.post('/addBook/', book)
        
    },
    getBooks: function(){
        return axios.get('/getBooks')
    },
    deleteBook: function(id){
        return axios.delete('/deleteBook/' + id)
    }
}