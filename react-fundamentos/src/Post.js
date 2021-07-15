import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';
function Post(props){
	return (
		<>
			<article>
				<PostHeader
					onRemove={props.onRemove}
					post ={{
						id : props.post.id,
						title : props.post.title,
						read : props.post.read
					}}

				/>
				<small>{props.post.subtitle}</small>
				<span>Likes : {props.post.likes}</span>
			</article>
			<br />
		</>
	);
}

Post.propTypes = {

	post : PropTypes.shape({
		id : PropTypes.number.isRequired,
		title : PropTypes.string.isRequired,
		subtitle : PropTypes.string.isRequired,
		likes : PropTypes.number.isRequired,
		read : PropTypes.bool.isRequired,
		
		
	}),
	onRemove : PropTypes.func.isRequired,
};


export default Post;