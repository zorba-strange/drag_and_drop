const React                 = require('react');
const Radium                = require('radium');
const Immutable             = require('immutable');
const HTML5Backend          = require('react-dnd-html5-backend');
const { DragDropContext }   = require('react-dnd');
const { compose }           = require('redux');
const { connect }           = require('react-redux');

const Column                = require('./Column');
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
    
    
const TopLevelWrapperComponent = ({
    columns,
}) => {
    return (
        <div>
            <div
                style={column_wrapper_styles}>
                {columns.map((column, column_index) => {
                    return (
                        <Column />
                    );
                })}

            </div>
            <div
                style={button_wrapper_styles}>
                <MakeColumnButton />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        columns: state.getIn(['columns'], Immutable.List([])),
    };
};


module.exports = compose(
    DragDropContext(HTML5Backend),
    connect(mapStateToProps),
)(Radium(TopLevelWrapperComponent));
