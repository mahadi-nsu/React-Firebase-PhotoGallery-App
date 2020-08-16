import React, { useState } from 'react';

const UploadForm = () => {

    const [file, setfile] = useState(null);
    const [error, seterror] = useState(null);


    const types = ['image/png', 'image/jpeg'];

    const changeHandler = (e) => {
        // e.preventDefault();
        let selected = e.target.files[0];


        // console.log(selected);
        if (selected && types.includes(selected.type)) {
            setfile(selected);
            seterror('');

        } else {
            setfile(null);
            seterror('Please Select and image file (png or jpeg)');
        }

    }
    return (
        <form>
            <input type="file" onChange={changeHandler} />
            <div className="output">
                {error && <div className="error"> {error}</div>}
            </div>

            <div className="output">
                {file && <div> {file.name}</div>}
            </div>

        </form>
    )
}

export default UploadForm;