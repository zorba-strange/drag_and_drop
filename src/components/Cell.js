const React                 = require('react');
const Radium                = require('radium');
const { DragSource }        = require('react-dnd');


const page_wrapper_styles = {

    backgroundColor: 'pink',

    borderRadius: 5,

    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
};

const Cell_Type = 'Cell_Type';

const cellDragSource = {
    beginDrag: (props) => {
        console.log('a cell is being dragged');
        return {placeholder: 'json object'};
    },
};

const collect = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    };
};

const Cell = ({
    connectDragSource,
}) => {
    return connectDragSource(
        <div
            style={page_wrapper_styles}>
            I am Jenny from the block
        </div>
    )
};


module.exports = DragSource(Cell_Type, cellDragSource, collect)(Radium(Cell));
