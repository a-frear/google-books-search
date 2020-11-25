import React from  'react';
import './Search.css';

function Search(props) {
    return (
        <form onSubmit={e => props.handleSubmit(e)}>
            {/* Search Box */}
            <div className="searchBox">
                    <label>Search</label>
                    <input type="text" onChange={e => props.setSearchTerm(e.target.value)} required />
                    <input type="submit" />
            </div>
            {/* Filters */}
            <div className="filterBox">
                <label htmlFor="printType">Print Type: </label>
                <select id="printType" onChange={e => props.setPrintType(e.target.value)}>
                    <option value="all">All</option>
                    <option value="books">Books</option>
                    <option value="magazines">Magazines</option>
                </select>
                <label htmlFor="bookType">Book Type: </label>
                <select id="bookType" onChange={e => props.setState(e.target.value)}>
                    <option value="no-filter">No Filter</option>
                    <option value="partial">Partial Preview</option>
                    <option value="full">Full Text</option>
                    <option value="free-ebooks">Free Ebooks</option>
                    <option value="paid-ebooks">Paid Ebooks</option>
                    <option value="ebooks">All Ebooks</option>
                </select>
            </div>
        </form>
    );
}

   

export default Search;