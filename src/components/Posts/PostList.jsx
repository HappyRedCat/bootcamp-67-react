import React from 'react'
import { PostCard } from './PostCard'
import s from './Posts.module.css'
export const PostList = ({ posts }) => {
	return (
		<ul className={s.listWrapper}>
			{posts.map(post => (
				<PostCard key={post.id} {...post} />
			))}
		</ul>
	)
}
