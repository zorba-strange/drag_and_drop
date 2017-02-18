const React                 = require('react');
const Radium                = require('radium');

const Cell                  = require('./Cell');


const page_wrapper_styles = {

    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: 'grey',

    borderRadius: 5,
    
    display: 'flex',
    flexDirection: 'column',

    flexBasis: 0,
    flexGrow: 1,

    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,

    minHeight: '20em',
};


const Column = () => {
    return (
        <div
            style={page_wrapper_styles}>
            <Cell />
            <Cell />
            <Cell />
        </div>
    );
};


module.exports = Radium(Column);
