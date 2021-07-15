import React, { useContext} from 'react';
import PropType from 'prop-types';
import Button from './Button';
import { ThemeContext } from './ThemeContext';



function Header(props){
	const {onToogleTheme} = useContext(ThemeContext);
	return (
		<>
			<h1>{props.title}</h1>
			<Button
				onClick = {onToogleTheme}

			> Mudar Tema</Button>
			{props.children}
		</>
	);
}
Header.propTypes = {
	title : PropType.string.isRequired,
	children : PropType.node,
};

Header.defaultProps = {
	title : 'JStack\'s Blog'
};
export default Header;