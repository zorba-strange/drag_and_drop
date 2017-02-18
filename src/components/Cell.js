const React                 = require('react');
const Radium                = require('radium');


const page_wrapper_styles = {

    backgroundColor: 'pink',

    borderRadius: 5,

    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
};

const Cell = () => {
    return(
        <div
            style={page_wrapper_styles}>
            I am Jenny from the block
        </div>
    )
};


module.exports = Radium(Cell);
