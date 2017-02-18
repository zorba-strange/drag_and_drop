const React                 = require('react');
const Radium                = require('radium');
const { DragSource }        = require('react-dnd');

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
}) => {
    return connectDragSource(
        <div
            style={page_wrapper_styles}>
            <Cell />
            <Cell />
            <Cell />
        </div>
    );
};


module.exports = DragSource(Column_Type, columnDragSource, collect)(Radium(Column));
