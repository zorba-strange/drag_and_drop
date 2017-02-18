const React                 = require('react');
const Radium                = require('radium');
const Immutable             = require('immutable');
const { DragSource }        = require('react-dnd');
const { compose }           = require('redux');
const { connect }           = require('react-redux');

const MakeCellButton        = require('./buttons/MakeCellButton');
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

const Column_Type = 'Column_Type';

const columnDragSource = {
    beginDrag: (props) => {
        console.log('a column is being dragged');
        return {placeholder: 'json object'};
    },
};

const collect = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    };
};

const Column = ({
    connectDragSource,
    column_index,
    cells,
}) => {
    console.log(cells);
    return connectDragSource(
        <div
            style={page_wrapper_styles}>
            <MakeCellButton 
                column_index={column_index}/>
            {cells.map(cell => {
                return (
                    <Cell />
                );
            })}
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        cells: state.getIn(['columns', ownProps.column_index], Immutable.List([])),
    };
};

module.exports = compose(
    DragSource(Column_Type, columnDragSource, collect),
    connect(mapStateToProps),
)(Radium(Column));
