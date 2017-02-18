const React                 = require('react');
const Radium                = require('radium');


const page_wrapper_styles = {

    backgroundColor: 'pink',

    borderRadius: 5,

    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,

    height: '5em',
    width: '15em',

    ':active': {
        transform: 'translateY(5px)',
    },
};

const MakeCellButton = () => {
    return (
        <div
            style={page_wrapper_styles}>
            jlo
        </div>
    )
};


module.exports = Radium(MakeCellButton);
