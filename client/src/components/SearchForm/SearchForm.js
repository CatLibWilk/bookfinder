import React from 'react';

const SearchForm = ({ width, funct, subFunct }) => {
    return (
        <div className={width ? `${width} mx-auto mt-3` : 'col-md-6 mx-auto mt-3'}>
            
            <form id="add-form">
                <div class="form-group">
                    <label for="title-search-input">Title</label>
                    <input type="text" class="form-control" id="title-search-input" placeholder="Enter Title" onChange={funct}></input>
                    
                </div>

                <div class="form-group">
                    <label for="author-search-input">Author</label>
                    <input type="text" class="form-control" id="author-search-input" placeholder="Enter Author Name" onChange={funct}></input>
                </div>


                <button id="add-btn" type="submit" class="btn" onClick={subFunct}>Submit</button>
            </form>
        </div>
    )
};

export default SearchForm;