const React                 = require('react');
const Radium                = require('radium');

const Column                = require('./Column');
const MakeCellButton        = require('./buttons/MakeCellButton');
const MakeColumnButton      = require('./buttons/MakeColumnButton');

const column_wrapper_styles = {

    // for debugging and visual feedback
    // borderWidth: 3,
    // borderStyle: 'solid',
    // borderColor: 'pink',

    display: 'flex',

    flexBasis: 0,
    flexGrow: 1,

};

const button_wrapper_styles = {

    display: 'flex',

    flexBasis: 0,
    flexGrow: 1,

    justifyContent: 'center',
}
    
    
const TopLevelWrapperComponent = () => {
    return (
        <div>
            <div
                style={column_wrapper_styles}>
                <Column />
                <Column />
            </div>
            <div
            style={button_wrapper_styles}>
                <MakeCellButton />
                <MakeColumnButton />
            </div>
        </div>
    );
}

module.exports = Radium(TopLevelWrapperComponent);
