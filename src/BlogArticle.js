import Theme from './Theme'
import Photo from './Photo'
import amplify from './images/amplify.png'
import schema from './images/schema.png'
import contact from './images/contact.png'
import email from './images/email.png'
import archi from './images/archi.png'
import { HashLink as Link } from 'react-router-hash-link'
import workflow from './images/workflow.png'

const BlogArticle = () => {
  return (
    <div id='post'>
      <Theme
        titleBoxStyle='post-title-box'
        titleStyle='post-title'
        titleValue='BLOG POST'
      />
      <div id='article'>
        <h2 id='article_title'>
          Create a full-stack web application using AWS Amplify
        </h2>
        <Photo
          src={amplify}
          name='amplify and react'
          credit='https://medium.com/better-programming/build-a-react-app-with-authentication-using-aws-amplify-49db1dfdc290'
        />
        <p>
          {' '}
          In this post, I will introduce the features and implementations of
          this cloud space application, whose entire stack is built completely
          using AWS Amplify. Besides, I would also like to share with you a few
          problems I encountered when making this application, and hopefully
          this can save you some times googling around for the solutions.
        </p>
        <p>
          The idea of creating this web space is inspired by an initiative by
          Forrest Brazeal, a cloud resume challenge(which is overdue by the end
          of July, 2020). Feel free to check out this awesome challenge through
          the link{' '}
          <a
            href='https://cloudresumechallenge.dev/instructions/'
            target='_blank'
            rel='noopener noreferrer'
          >
            here
          </a>
          {'. '}
        </p>
        <p className='disclaimer'>
          Disclaimer: This is my first attempt of designing and creating full
          stack application using fronend framework and javascript (I usually
          focus on developing and writing backend code in Java), there might be
          something that is wrong or not the best practice. If you notice
          anything, please let me know, and it is highly appreciated to get feed
          back from you!{' '}
        </p>
        <p>
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
          implemented for this application. If you are interested about all the
          details, you are welcome to visit the official tutorial website listed
          above.
        </p>
        <div>
          <h3>Content</h3>
          <ul>
            <li>
              {' '}
              <Link smooth to='/post/create-amplify-app/#archi'>ARCHITECTURE</Link>
            </li>
            <li>
              <Link smooth to='/post/create-amplify-app/#workflow'>WORKFLOW USING AMPLIFY</Link>
            </li>
            <li>
              <Link smooth to='/post/create-amplify-app/#visitor'>IMPLEMENT A VISITOR DASHBOARD</Link>
            </li>
            <li>
              <Link smooth to='/post/create-amplify-app/#cv'>PROCESS MY CV DYNAMICALLY</Link>
            </li>
            <li>
              <Link smooth to='/post/create-amplify-app/#email'>
                IMPLEMENT EMAIL NOTIFICATION FOR CONTACT
              </Link>
            </li>
          </ul>
        </div>

        <h2 id='archi'>ARCHITECTURE</h2>
        <p>
          The front end of the application is built using react. And the back
          end infrastructure is created using amplify, who under-the-hood is
          using CloudFormation to create and manage the infrastructures. In
          order to use AWS backend service in our front end, AWS provides us
          with several libraries, and they are installed into our react project
          using npm.
        </p>
        <Photo src={archi} name='amplify and react' />
        <h2 id='workflow'>WORKFLOW USING AMPLIFY</h2>
        <Photo
          src={workflow}
          name='amplify workflow'
          credit='https://docs.amplify.aws/cli/teams/overview'
        />
        <p>
          The AWS Amplify Console provides a Git-based workflow for building,
          deploying, and hosting your Amplify web app — both the frontend and
          backend — from source control. You can easily connect the git-based
          repository of your choice to Amplify, and on each commit made to the
          repository, a new build will be initiated in Amplify. For the
          simplicity, I've only maintained two branches--main and dev, for my
          project. You can build several application based on the branch you
          connect to, and you can even connect to different backend to frontend
          of your choice--for instance, connect your frontend on main branch to
          a dev backend. Frontend and backend are maintained seperately in
          Amplify which provides us with huge flexibility. To create a new
          backend environment for a particular branch, use Amplify CLI.
        </p>
        <h2 id='visitor'>IMPLEMENT A VISITOR DASHBOARD</h2>
        <p>
          The visitor dashboard is implemented on the home page to record the
          number of visitors. The visitor number is persisted in AWS DynamoDB-a
          NoSQL database. Amplify makes it extremely intuitive and
          straight-forward for us to implement and integrate the whole
          technology stack. A GraphQL API is created, as well as a GraphQL
          schema and a DynamoDB table. You only need to provide Amplify your
          data schema, and all the API operations and database table will be
          created automatically.
        </p>
        <span>Below is the data schema for the visitor dashboard.</span>
        <Photo src={schema} name='schema pic' />
        <p>
          Visitor count will be fetched from database through the API when the
          page begins to render. The value will then be updated locally and
          remotely again through API, the new value will be rendered through the
          updated local state value. All these operations are combined into one
          asyncronous function and will only be invoked once on the first render
          using 'useEffect' react hook.
        </p>
        <p>
          One of the problems I've encountered was that I kept getting invalid
          response from the graphql API. The reason behind this is that I didn't
          comply to the contract given by the API. This is the wrong API call:
        </p>
        <pre>
          graphqlOperation(updateVisitorCount, {"{ id: '1', count: num + 1 }"})
        </pre>
        <p>And this is what's specified in the schema: </p>
        <pre>
          updateVisitorCount(input: UpdateVisitorCountInput!, condition:
          ModelvisitorCountConditionInput): visitorCount
        </pre>
        <pre>input UpdateVisitorCountInput {'{id: ID!  count: Int}'}</pre>
        <p>
          Comparing two statements above, you will notice that the input I
          passed to the first wrong statement is incomplete-- you need to insert
          the input as it is specified in the schema. The correct format is as
          the following:{' '}
        </p>
        <pre>
          graphqlOperation(updateVisitorCount,{' '}
          {"{input : { id: '1', count: num + 1 }}"})
        </pre>
        <h2 id='cv'>PROCESS MY CV DYNAMICALLY</h2>
        <p>
          Instead of putting my CV content statically in html, I put my CV in
          json file and format them in a organised way so that I could process
          and render the content dynamically using JSX. This way if I wish to
          update my CV content in the future, I can add content directly to the json file without
          worrying about HTML rendering of the content.{' '}
        </p>
        <h2 id='email'>IMPLEMENT EMAIL NOTIFICATION FOR CONTACT</h2>
        <p>
          I have implemented a contact form in the 'Contact Me' page. When a
          visitor fill out the form and hit submit, it will send a post request
          to a RestAPI implemented using AWS APIGateway, which will subsequently
          trigger a lambda function in the cloud. Inside the lambda function, it
          will utilise AWS SES(Simple Email Service) to send a formatted email
          to my personal email address. If the API respond is successful, it
          will prompt a success message to the visitor with their name,
          otherwise an error message will be prompted instead.
        </p>
        <Photo src={contact} name='ses code segment' />
        <Photo src={email} name='email' />
      </div>
    </div>
  )
}

export default BlogArticle
