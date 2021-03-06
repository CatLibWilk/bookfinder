import React from 'react';

const AddForm = ({ width, funct, subFunct }) => {
    return (
        <div className={width ? `${width} mx-auto mt-3` : 'col-md-6 mx-auto mt-3'}>
            
            <form id="add-form">
                <div class="form-group">
                    <label for="title-input">Title</label>
                    <input type="text" class="form-control" id="title-input" placeholder="Enter Title" onChange={funct}></input>
                    
                </div>

                <div class="form-group">
                    <label for="author-input">Author</label>
                    <input type="text" class="form-control" id="author-input" placeholder="Enter Author Name" onChange={funct}></input>
                </div>

                <div class="form-group">
                    <label for="priority">Priority (lowest-highest)</label>
                    <select class="form-control" id="priority-input" onChange={funct}>
                    <option value=''>Select a Priority</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    
                    </select>
                </div>

                <button id="add-btn" type="submit" class="btn" onClick={subFunct}>Submit</button>
            </form>
        </div>
    )
};

export default AddForm;