import Theme from './Theme'
import Photo from './Photo'
import amplify from './images/amplify.png'
import schema from './images/schema.png'
import contact from './images/contact.png'
import email from './images/email.png'
import archi from './images/archi.png'
import apiErr from './images/apiErr.png'
import configure from './images/configure.png'
import { HashLink as Link } from 'react-router-hash-link'
import workflow from './images/workflow.png'
import option1 from './images/option1.png'
import option2 from './images/option2.png'
import option4 from './images/option4.png'
import option3 from './images/option3.png'
import option5 from './images/option5.png'
import { motion } from 'framer-motion'

const BlogArticle = () => {
  return (
    <div>
      <motion.div
        exit={{ opacity: 0 }}
        className='bg-index grid justify-items-center items-center grid-flow-row auto-rows-auto  h-screen w-screen z-0 overflow-auto'
      >
        <Theme />
        <div class='place-self-start px-10 py-10 xl:py-16 '>
          <p class='font-title text-3xl lg:text-5xl xl:text-7xl'>Blog Post</p>
        </div>
        <div class='flex flex-col justify-items-center items-center xl:p-10 w-8/12 lg:p-5 '>
          <h2 class='font-content_header md:text-2xl lg:text-3xl xl:text-6xl lg:pb-5 xl:pb-10 text-center'>
            Create a full-stack web application using AWS Amplify
          </h2>
          <p class='font-serif lg:text-lg xl:text-2xl p-12'>
            Updated At: Fri,15/1/2021
          </p>
          <Photo src={amplify} name='amplify and react' />
          <p class='font-content xl:leading-loose xl:text-xl py-7'>
            In this post, I will introduce the features and implementations of
            this cloud space application, whose entire stack is built completely
            using AWS Amplify. Besides, I would also like to share with you a
            few problems I encountered when making this application, and
            hopefully this can save you some times googling around for the
            solutions.
          </p>
          <p class='font-content xl:leading-loose xl:text-xl py-7'>
            The idea of creating this web space is inspired by an initiative by
            Forrest Brazeal, a cloud resume challenge(which is overdue by the
            end of July, 2020). Feel free to check out this awesome challenge
            through the link{' '}
            <a
              href='https://cloudresumechallenge.dev/instructions/'
              target='_blank'
              rel='noopener noreferrer'
            >
              here
            </a>
            {'. '}
          </p>
          <p class='font-content xl:leading-loose xl:text-xl font-bold italic py-7'>
            Disclaimer: This is my first attempt of designing and creating full
            stack application using fronend framework and javascript (I usually
            focus on developing and writing backend code in Java), there might
            be something that is wrong or not the best practice. If you notice
            anything, please let me know, and it is highly appreciated to get
            feed back from you!{' '}
          </p>
          <p class='font-content xl:leading-loose xl:text-xl py-7'>
            The tutorial from AWS Amplify official website is a good starting
            point to learn and start building your own application. If you are
            also new to AWS Amplify like myself, I would highly recommend this
            tutorial series from{' '}
            <a
              href='https://docs.amplify.aws/start/getting-started/setup/q/integration/react'
              target='_blank'
              rel='noopener noreferrer'
            >
              Amazon
            </a>
            {'. '}I will not go into details about every aspects of the
            implementations. This blog post will only focus on the features
            implemented for this application. If you are interested about all
            the details, you are welcome to visit the official tutorial website
            listed above.
          </p>
          <div class='flex flex-col justify-items-start py-16'>
            <h3 class='font-serif xl:text-2xl'>Content</h3>
            <ul class='xl:text-xl list-disc list-inside'>
              <li>
                {' '}
                <Link
                  smooth
                  to='/post/create-amplify-app/#archi'
                  class='text-black font-subtitle text-base xl:text-2xl transition duration-500 ease-in-out hover:bg-green2 hover:text-white'
                >
                  ARCHITECTURE
                </Link>
              </li>
              <li>
                <Link
                  smooth
                  to='/post/create-amplify-app/#workflow'
                  class='text-black font-subtitle text-base xl:text-2xl transition duration-500 ease-in-out hover:bg-green2 hover:text-white'
                >
                  WORKFLOW USING AMPLIFY
                </Link>
              </li>
              <li>
                <Link
                  smooth
                  to='/post/create-amplify-app/#visitor'
                  class='text-black font-subtitle text-base xl:text-2xl transition duration-500 ease-in-out hover:bg-green2 hover:text-white'
                >
                  IMPLEMENT A VISITOR DASHBOARD
                </Link>
              </li>
              <li>
                <Link
                  smooth
                  to='/post/create-amplify-app/#cv'
                  class='text-black font-subtitle text-base xl:text-2xl transition duration-500 ease-in-out hover:bg-green2 hover:text-white'
                >
                  PROCESS MY CV DYNAMICALLY
                </Link>
              </li>
              <li>
                <Link
                  smooth
                  to='/post/create-amplify-app/#email'
                  class='text-black font-subtitle text-base xl:text-2xl transition duration-500 ease-in-out hover:bg-green2 hover:text-white'
                >
                  IMPLEMENT EMAIL NOTIFICATION FOR CONTACT
                </Link>
              </li>
              <li>
                <Link
                  smooth
                  to='/post/create-amplify-app/#token'
                  class='text-black font-subtitle text-base xl:text-2xl transition duration-500 ease-in-out hover:bg-green2 hover:text-white'
                >
                  “MISSING AUTHENTICATION TOKEN” — APIGATEWAY TROUBLESHOOTING
                </Link>
              </li>
              <li>
                <Link
                  smooth
                  to='/post/create-amplify-app/#apiKey'
                  class='text-black font-subtitle text-base xl:text-2xl transition duration-500 ease-in-out hover:bg-green2 hover:text-white'
                >
                  ROTATE API KEY FOR APPSYNC API
                </Link>
              </li>
            </ul>
          </div>
          <h2
            id='archi'
            class='font-content_header xl:text-3xl place-self-start py-10'
          >
            ARCHITECTURE
          </h2>
          <p class='font-content xl:leading-loose xl:text-xl py-7'>
            The front end of the application is built using react. And the back
            end infrastructure is created using amplify, who under-the-hood is
            using CloudFormation to create and manage the infrastructures. In
            order to use AWS backend service in our front end, AWS provides us
            with several libraries, and they are installed into our react
            project using npm.
          </p>
          <Photo src={archi} name='amplify and react' />
          <h2
            id='workflow'
            class='font-content_header xl:text-3xl place-self-start py-20'
          >
            WORKFLOW USING AMPLIFY
          </h2>
          <Photo
            src={workflow}
            name='amplify workflow'
            credit='https://docs.amplify.aws/cli/teams/overview'
          />
          <p class='font-content xl:leading-loose xl:text-xl py-7'>
            The AWS Amplify Console provides a Git-based workflow for building,
            deploying, and hosting your Amplify web app — both the frontend and
            backend — from source control. You can easily connect the git-based
            repository of your choice to Amplify, and on each commit made to the
            repository, a new build will be initiated in Amplify. For the
            simplicity, I've only maintained two branches--main and dev, for my
            project. You can build several application based on the branch you
            connect to, and you can even connect to different backend to
            frontend of your choice--for instance, connect your frontend on main
            branch to a dev backend. Frontend and backend are maintained
            seperately in Amplify which provides us with huge flexibility. To
            create a new backend environment for a particular branch, use
            Amplify CLI.
          </p>
          <h2
            id='visitor'
            class='font-content_header xl:text-3xl place-self-start py-10'
          >
            IMPLEMENT A VISITOR DASHBOARD
          </h2>
          <p class='font-content xl:leading-loose xl:text-xl py-7'>
            The visitor dashboard is implemented on the home page to record the
            number of visitors. The visitor number is persisted in AWS
            DynamoDB-a NoSQL database. Amplify makes it extremely intuitive and
            straight-forward for us to implement and integrate the whole
            technology stack. A GraphQL API is created, as well as a GraphQL
            schema and a DynamoDB table. You only need to provide Amplify your
            data schema, and all the API operations and database table will be
            created automatically.
          </p>
          <span>Below is the data schema for the visitor dashboard.</span>
          <Photo src={schema} name='schema pic' />
          <p class='font-content xl:leading-loose xl:text-xl py-7'>
            Visitor count will be fetched from database through the API when the
            page begins to render. The value will then be updated locally and
            remotely again through API, the new value will be rendered through
            the updated local state value. All these operations are combined
            into one asyncronous function and will only be invoked once on the
            first render using 'useEffect' react hook.
          </p>
          <p class='font-content xl:leading-loose xl:text-xl  py-7'>
            One of the problems I've encountered was that I kept getting invalid
            response from the graphql API. The reason behind this is that I
            didn't comply to the contract given by the API. This is the wrong
            API call:
          </p>
          <pre class='text-green2 xl:text-xl'>
            graphqlOperation(updateVisitorCount, {"{ id: '1', count: num + 1 }"}
            )
          </pre>
          <p class='font-content xl:leading-loose xl:text-xl py-7'>
            And this is what's specified in the schema:{' '}
          </p>
          <pre class='text-green2 xl:text-xl lg:text-base'>
            updateVisitorCount(<br/>
            input: UpdateVisitorCountInput!, <br/>
            condition: ModelvisitorCountConditionInput): <br/>
            visitorCount;
          </pre>
          <pre class='text-green2 xl:text-xl lg:text-base'>
            input UpdateVisitorCountInput {'{id: ID!  count: Int}'};
          </pre>
          <p class='font-content xl:leading-loose xl:text-xl py-7'>
            Comparing two statements above, you will notice that the input I
            passed to the first wrong statement is incomplete-- you need to
            insert the input as it is specified in the schema. The correct
            format is as the following:{' '}
          </p>
          <pre class='text-green2 xl:text-xl'>
            graphqlOperation(updateVisitorCount,{' '}
            {"{input : { id: '1', count: num + 1 }}"})
          </pre>
          <h2
            id='cv'
            class='font-content_header xl:text-3xl place-self-start py-20'
          >
            PROCESS MY CV DYNAMICALLY
          </h2>
          <p class='font-content xl:leading-loose xl:text-xl py-4 xl:py-7'>
            Instead of putting my CV content statically in html, I put my CV in
            json file and format them in a organised way so that I could process
            and render the content dynamically using JSX. This way if I wish to
            update my CV content in the future, I can add content directly to
            the json file without worrying about HTML rendering of the content.{' '}
          </p>
          <h2
            id='email'
            class='font-content_header xl:text-3xl place-self-start py-16'
          >
            IMPLEMENT EMAIL NOTIFICATION FOR CONTACT
          </h2>
          <p class='font-content xl:leading-loose xl:text-xl py-4 xl:py-7'>
            I have implemented a contact form in the 'Contact Me' page. When a
            visitor fill out the form and hit submit, it will send a post
            request to a RestAPI implemented using AWS APIGateway, which will
            subsequently trigger a lambda function in the cloud. Inside the
            lambda function, it will utilise AWS SES(Simple Email Service) to
            send a formatted email to my personal email address. If the API
            respond is successful, it will prompt a success message to the
            visitor with their name, otherwise an error message will be prompted
            instead.
          </p>
          <div class='py-8'>
            <Photo src={contact} name='ses code segment' />
          </div>
          <div class='py-6'>
            <Photo src={email} name='email' />
          </div>

          <h2
            id='token'
            class='font-content_header xl:text-3xl place-self-start py-20'
          >
            “MISSING AUTHENTICATION TOKEN” — APIGATEWAY TROUBLESHOOTING
          </h2>
          <p class='font-content xl:leading-loose xl:text-xl py-4 xl:py-7'>
            When I tried to send a POST request to the gateway from the contact
            form, I encountered error 401 that said "Missing Authentication
            Token", which in the meanwhile gave me an error message in the
            console indicating the response was blocked by the browser due to
            the missing "Access-Control-Allow-Origin" header. This was a rather
            odd error, as two errors seemed irrelevant. I googled this error
            message and turned out there were lots of people encountered the
            same issue. Given lots of suggestions online, I first confirmed
            there was no authentication mechanism implemented on my API. Then, I
            went on experimenting with most of the solutions. However, no luck
            was found in all of them. At the end, I found the solution from the
            AWS offcial documentation regarding "Enable CORS support for REST
            API".
          </p>
          <p class='font-content xl:leading-loose xl:text-xl py-4 xl:py-7'>
            CORS support has to be enabled since different domains are used in
            this scenario (the website uses a custom domain name
            "peggy-liu-cloud-space.com" and the API uses AWS-provided domain).
            When the POST request is triggered by the application, a OPTIONS
            request will be sent to the API first. The POST request will only be
            sent when there is a "Access-Control-Allow-Origin" header presented
            with 200 OK response. Based on the AWS documentation, the
            implementation can be described as follows:
            <p class='font-content xl:leading-loose xl:text-xl py-4 xl:py-7'>
              Step 1: create a 'OPTIONS' method under the resource that requires
              a preflight request. In my case, it is the '/email' resource.
              Since OPTIONS method only need to respond with required headers
              without any backend support, Mock integration is adequate in this
              case.
            </p>
          </p>
          <div class='py-8'>
            <Photo src={option1} name='option1' />
          </div>
          <div class='py-6'> 
            <Photo src={option2} name='option2' />
          </div>
          <p class='font-content xl:leading-loose xl:text-xl py-4 xl:py-10'>
            Step 2: In the OPTIONS method, go to "Method Response" and set up
            response headers for HTTP Status 200 as following:
          </p>
          <Photo src={option4} name='option4' />
          <p class='font-content xl:leading-loose xl:text-xl py-4 xl:py-10'>
            Step 3: In the same OPTIONS method, go to "Integration Response",
            and specify HTTP status regex and header mappings values.
          </p>
          <Photo src={option3} name='option3' />
          <p class='font-content xl:leading-loose xl:text-xl py-7 text-left'>
            Step 4: THIS IS A REALLY IMPORTANT STEP! DEPLOY API! DEPLOY API!
            DEPLOY API!{' '}
          </p>
          <p class='font-content xl:leading-loose xl:text-xl py-7'>
            Step 5: Make sure your actual CORS-enabled method also return a
            "Access-Control-Allow-Origin" header in the response. In my case, it
            is my POST method and I added this header in the serverless function
            response.
          </p>
          <Photo src={option5} name='option5' />
          <h2
            id='apiKey'
            class='font-content_header xl:text-3xl place-self-start py-20'
          >
            ROTATE API KEY FOR APPSYNC API
          </h2>
          <p class='font-content xl:leading-loose xl:text-xl py-7'>
            After a week of the successful deployment of my web application, I
            encountered the following error for my welcome page:
          </p>
          <Photo src={apiErr} name='api error' />
          <p class='font-content xl:leading-loose xl:text-xl py-7'>
            As we know, error 401 stands for unthorized access for resources.
            The authorization mechanism used for the AppSync API is API Key. You
            can also use IAM Role or AWS Cognito pool for authorization in this
            case. From what we have seen so far, we can almost be sure that
            something wrong with the API Key. I went on to the AWS AppSync
            Console, and discovered that my API Key was expired few days ago.
          </p>
          <p class='font-content xl:leading-loose xl:text-xl py-7'>
            According to the official documentation from AWS, to handle API Key
            expiration, you need to configure the following:{' '}
          </p>
          <Photo src={configure} name='configure' />
        </div>
      </motion.div>
    </div>
  )
}

export default BlogArticle
