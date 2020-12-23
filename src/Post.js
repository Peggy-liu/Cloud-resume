import Theme from './Theme'
import { Link } from 'react-router-dom'

const Post = () => {
  return (
    <div id='post'>
      <Theme
        titleBoxStyle='post-title-box'
        titleStyle='post-title'
        titleValue='BLOG POST'
      />

      <div id='post_cat'>
        <h2>Posts</h2>
        <ul>
          <Link to='/blog' className='link'>
            <li>Create a full-stack web application using AWS Amplify</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}


export default Post
