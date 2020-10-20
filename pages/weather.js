import { connect } from 'react-redux';
import { setInfo } from '../redux/actions/main';

function Weather(props) {
	console.log(props);
	return <div></div>;
}

const mapStateToProps = (state) => ({
	userInfo: state,
});

const mapDispatchToProps = {
	setInfo: setInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
