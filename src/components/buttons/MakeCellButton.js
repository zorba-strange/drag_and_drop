const React                 = require('react');
const Radium                = require('radium');
const { connect }             = require('react-redux');
const { bindActionCreators }  = require('redux');
const Immutable               = require('immutable');
const { makeCell }            = require('../../state/actions/make_actions');

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


const MakeCellButton = ({
    makeCell,
    column_index,
}) => {
    return (
        <div
            onClick={(e) => {
                e.preventDefault();
                console.log('make new cell');
                const cell = 'cell';
                makeCell(column_index, cell);
            }}
            style={page_wrapper_styles}>
            jlo
        </div>
    )
};

const mapStateToProps = (state) => {
    return {};
}
const mapDispatchToProps = (dispatch) => {
    return {
        makeCell: bindActionCreators(makeCell, dispatch),
    }
};


module.exports = connect(mapStateToProps, mapDispatchToProps)(Radium(MakeCellButton));
