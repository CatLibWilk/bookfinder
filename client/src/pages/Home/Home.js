import React, { Component} from 'react';
import List from '../../components/List';
import ListItem from '../../components/ListItem';
import AddForm from '../../components/AddForm';
import SearchForm from '../../components/SearchForm';
import API from '../../utils/API';

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            title_input: '',
            author_input: '',
            title_search_input: '',
            author_search_input: '',
            priority_input: 0,
            returned_data: []
        }
    }
    componentDidMount(){
        setTimeout(load, 1000);
       
        function load() {
          document.querySelector('.wrapper').classList.add('wrapper-loaded');
          document.querySelector('#home-background').classList.add('wrapper-loaded');

          
        }
        this.retrieveTitles();
        console.log(this.state)
    }

    retrieveTitles = () => {
        API.getBooks()
            .then(response => { this.setState( { returned_data: response.data} ); console.log(this.state) } )
    }
    handleInput = (e) => {

        switch (e.target.id){
            case "title-input":
                this.setState( {title_input: e.target.value} );
                break;
            case "author-input":
                this.setState( {author_input: e.target.value} );
                break;
            case "title-search-input":
                this.setState( {title_search_input: e.target.value} );
                break;
            case "author-search-input":
                this.setState( {author_search_input: e.target.value} );
                break;
            case "priority-input":
            console.log(`prio is ${e.target.value}`);
                this.setState( {priority_input: e.target.value} ) ; console.log(this.state);
                break;
        }

    }

    handleSubmit = (e) => {
        e.preventDefault();
        API.addBook( { title: this.state.title_input, author: this.state.author_input, priority: this.state.priority_input } )
            .then(response => { console.log('Title added to database'); this.retrieveTitles() } );
        document.querySelector('#add-form').reset();
        this.setState( { priority_input: 0 } );
    }

    handleDelete = (id) => {
          
        API.deleteBook(id)
            .then(response => { console.log(response); this.retrieveTitles(); } )

    }

    searchGoogle = (e) => {
        e.preventDefault();
        const query = {
            title: this.state.title_search_input,
            author: this.state.author_search_input
        }
        API.getTitles( query )
            .then(( {data} ) => {
                console.log(data.items)
            })
    }

    render(){
        return (
            <div className='row'>
                <div id='home-background' className='col-12 text-center'>

                    <AddForm width={'col-md-6'} funct={this.handleInput} subFunct={this.handleSubmit} />

                    <h1>Your Current List</h1>
                    
                    <List>
                        {this.state.returned_data.length > 0 ? this.state.returned_data.map(book => {
                            console.log(book)
                            return <ListItem id={book.id} title={book.title} author={book.author} priority={book.priority} delFunct={() => this.handleDelete(book.id)} />
                        }) : <h3 className='mt-5'>add your first item</h3>}
                    </List>
                    
                    <h1>Find a Title with Google Books</h1>
                    
                    <SearchForm width={'col-md-6'} funct={this.handleInput} subFunct={this.searchGoogle} />
                </div>
            </div>
        )
    }
};

export default Home;