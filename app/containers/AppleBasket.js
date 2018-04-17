import AppleBusket from '../componets/AppleBusket';
import { connect } from 'react-redux';

const mapStateToProps = state =>({
    appleBasket: state.appleBasket,
    beginPickApple: state.beginPickApple
});

const mapDispatchToProps = dispatch =>({
    // action: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(AppleBusket);