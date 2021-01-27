import { Link } from 'react-router-dom'

const Theme = (props) => {
    return (
      <div class='bg-index md:w-full  md:h-10 grid grid-cols-2 self-start z-10 '>
      <p class='font-header text-xl text-orange md:text-4xl '>
        Peggy's Cloud Space
      </p>
      <div class=''>
        <nav>
          <ul className='grid grid-cols-4 '>
            <Link to='/'>
              <li class='text-white rounded-lg border-opacity-0 hover:bg-orange font-subtitle text-sm md:text-2xl  text-center'>
                HOME
              </li>
            </Link>
            <Link to='/resume'>
              <li class='text-white rounded-lg border-opacity-0 hover:bg-orange font-subtitle text-sm md:text-2xl text-center'>
                CLOUD RESUME
              </li>
            </Link>
            <Link to='/post'>
              <li class='text-white rounded-lg border-opacity-0 hover:bg-orange font-subtitle text-sm md:text-2xl  text-center'>
                POST
              </li>
            </Link>
            <Link to='/contact'>
              <li class='text-white rounded-lg border-opacity-0 hover:bg-orange font-subtitle text-sm md:text-2xl  text-center'>
                CONTACT ME
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
    )
  }

  export default Theme;