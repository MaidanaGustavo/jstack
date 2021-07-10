import React from 'react';
import PropTypes from 'prop-types';
function Post(props){
	return (
		<>
			<article>
				<strong>{props.post.title}</strong> <br />
				<button onClick ={()=>props.onRemove(props.post.id)}>Remover</button>
				<small>{props.post.subtitle}</small>
				<span>Likes : {props.likes}</span>
			</article>
			<br />
		</>
	);
}

Post.propTypes = {
	likes : PropTypes.number.isRequired,
	post : PropTypes.shape({
		id : PropTypes.number.isRequired,
		title : PropTypes.string.isRequired,
		subtitle : PropTypes.string.isRequired,
		
	}),
	onRemove : PropTypes.func.isRequired,
};


export default Post;