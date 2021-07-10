import React from 'react';
import PropType from 'prop-types';
function Header(props){
	return (
		<>
			<h1>{props.title}</h1>
			{props.children}
		</>
	);
}
Header.PropType = {
	title : PropType.string.isRequired,
	children : PropType.node,
};


export default Header;