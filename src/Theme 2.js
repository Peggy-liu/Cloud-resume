import Nav from './Nav'

const Theme = (props) => {
    return (
      <div id={props.titleBoxStyle}>
        <span id={props.titleStyle}>
            {props.titleValue}
        </span>
        <Nav type='other' />
      </div>
    )
  }

  export default Theme;