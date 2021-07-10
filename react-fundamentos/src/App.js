import React,{ useState } from 'react';
import Post from './Post';
import Header from './Header';


function App() {
	const [posts,setPosts] = useState([
		{
			id: Math.random(), title: 'Title#02', subtitle: 'Sub#02', likes: 10,
		},
		{
			id: Math.random(), title: 'Title#01', subtitle: 'Sub#01', likes: 20,
		},
		{
			id: Math.random(), title: 'Title#03', subtitle: 'Sub#03', likes: 30,
		},
	]);
	function handleRefresh() {
		
		setPosts((prevstate)=>[
			...prevstate,
			{id: Math.random(),
				title: `Title#${posts.length + 1}`,
				subtitle: `Subtitle#${posts.length + 1}`,
				likes: 50,
			},
		]);
	}

	function handleRemove(postId){
		setPosts((prevState) =>(
			prevState.filter((element)=>
				element.id !==postId 
			)
		));
	}
	return (
		<>
			<Header
				title="JStack!!"
			>
				<h2>Alo ambev!!</h2>
				<button onClick={handleRefresh}>Atualizar</button>
			</Header>
			<hr />
			{posts.map((post) => (
				<Post
					key={post.title}
					likes={post.likes}
					post={{ id:post.id,title: post.title,subtitle: post.subtitle,
					}}
					onRemove = {handleRemove}
				/>
			))}

		</>

	);
}

export default App;
