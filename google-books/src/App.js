import React, { Component } from 'react';
import './App.css';
import Search from './Search/Search';
import BookList from './BookList/BookList'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      printType: 'all',
      bookType: 'no-filter',
      bookResults: [],   
      err: 'null',
    }
  }

  setSearchTerm(searchTerm){
    this.setState({
      searchTerm
    })
    console.log(searchTerm)
  }

  setPrintType(printType){
    this.setState({
      printType
    })
  }

  setBookType(bookType){
    this.setState({
      bookType
    })
  }


  handleSubmit(e) {
      e.preventDefault();
      let filter = (this.state.bookType!=="no-filter")? ("&filter="+this.state.bookType):"";
      let key = 'AIzaSyAUGotAa2AhEEGPu7PX4QATuJxHEShuuio';
      let url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}&printType=${this.state.printType}${filter}&key=${key}`;
    
    fetch(url)
        .then(results => {
            if(!results.ok) {
                throw new Error('Something went wrong, please try again later');
            }
            return results.json();
        })
        .then(data => {
          console.log(data);
            this.setState({
              bookResults: data.items
            });
          })

        .catch(err => {
            this.setState({
                err: err.message
            });
        });
    }
 
  render(){
    console.log(this.state);
    return (
      <main className='app'>
        <h1>Google Books Search</h1>
        <Search handleSubmit={e => this.handleSubmit(e)} setSearchTerm={searchTerm => this.setSearchTerm(searchTerm)} setPrintType={printType => this.setPrintType(printType)} setBookType={bookType => this.setBookType(bookType)}/>
        <BookList bookResults={this.state.bookResults} />
      </main>
    )
    
  }
}

export default App;
