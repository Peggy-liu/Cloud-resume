import Theme from './Theme'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Post = () => {
  return (
    <div>
      <motion.div
        exit={{ opacity: 0 }}
        className='bg-index grid justify-items-center grid-flow-row auto-rows-auto  h-screen w-screen z-0'
      >
        <Theme />
        <div class='place-self-start px-4 md:px-10 md:py-16 '>
          <p class='font-title text-2xl md:text-7xl'>Blog Post</p>
        </div>
        {/* <div id='post'>
     

      <div id='post_cat'>
        <h2>Posts</h2>
        <ul>
          <li>
            <Link to='/post/create-amplify-app' className='link'>
              Create a full-stack web application using AWS Amplify
            </Link>
          </li>
        </ul>
      </div>
    </div> */}
      </motion.div>
    </div>
  )
}

export default Post
