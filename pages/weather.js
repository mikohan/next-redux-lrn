import { connect } from 'react-redux';
import { setInfo } from '../redux/actions/main';
import { useState } from 'react';

function Weather(props) {
	const { userInfo, setInfo } = props;
	const [name, setName] = useState('defName');
	return (
		<div>
			<h1>Some stuff related to user {userInfo[0].name}</h1>
			<input
				name="name"
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<button onClick={() => setInfo(name)}>submit</button>
		</div>
	);
}

const mapStateToProps = (state) => ({
	userInfo: state,
});

const mapDispatchToProps = {
	setInfo: setInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
