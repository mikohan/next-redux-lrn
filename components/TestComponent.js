import React from 'react';
import { connect } from 'react-redux';
import { setInfo } from '../redux/actions/main';
import { useState } from 'react';

function TestComponent(props) {
	const { userInfo, setInfo } = props;
	return (
		<div>
			<h1 onClick={() => setInfo('NEW COOL NAME VLADIMIR')}>
				This is from TestComponent: {userInfo[0].name}
			</h1>
		</div>
	);
}
const mapStateToProps = (state) => ({
	userInfo: state,
});

const mapDispatchToProps = {
	setInfo: setInfo,
};
export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);
