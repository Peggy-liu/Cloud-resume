import Theme from './Theme'
import Photo from './Photo'
import amplify from './images/amplify.png'
import schema from './images/schema.png'

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
          The tutorial from AWS Amplify official website is a good starting
          point to learn and start building your own application. If you are
          also new to AWS Amplify like myself, I would highly recommend this
          tutorial series from{' '}
          <a href='https://docs.amplify.aws/start/getting-started/setup/q/integration/react'>
            Amazon.
          </a>
          I will not go into details about every aspects of implementations.
          This blog post will only focus on the features implemented for this
          application. If you are interested about all the details, you are
          welcome to visit the official tutorial website listed above.
        </p>
        <h2>Implement a visitor dashboard</h2>
        <p>
          The visitor dashboard is implemented on the home page to record the
          number of visitors. The visitor number is persisted in AWS DynamoDB-a
          NoSQL database. Amplify makes it extremely intuitive and easy for us
          to implement and integrate the whole technology stack. A GraphQL API
          is created, as well as a GraphQL schema and a DynamoDB table. You only
          need to provide Amplify your data schema, and all the API operations
          and database table will be created automatically.
        </p>
        <span>Below is the data schema for the visitor dashboard.</span>
        <img src={schema} alt='schema pic'></img>
        <p>
          At the first render of the home page, visitor count will be fetched
          from the database through the API. The value will then be updated
          locally and remotely again through API, the new value will be rendered
          through the updated local state value. All these operations is
          combined into one asyncronous function and will only be invoked once
          on the first render using 'useEffect' react hook.
        </p>
        <p>
          One of the problems I've encountered was that I kept getting invalid
          response from the graphql API. The reason behind this is because I
          didn't comply to the contract given by the API.
          This is the wrong API call made by react:
        </p>
        <pre>graphqlOperation(updateVisitorCount, {"{ id: '1', count: num + 1 }"})</pre>
        <p>And this is what's specified in the schema: </p>
        <pre>updateVisitorCount(input: UpdateVisitorCountInput!, condition: ModelvisitorCountConditionInput): visitorCount</pre>
        <pre>input UpdateVisitorCountInput {"{id: ID!  count: Int}"}</pre>
        <p>Comparing two statements above, you will notice that the input I passed to the first wrong statement is incomplete-- you need to insert the input as it is specified 
            in the schema: </p>
            <pre>graphqlOperation(updateVisitorCount, {"{input : { id: '1', count: num + 1 }}"})</pre>
      </div>
    </div>
  )
}

export default BlogArticle
