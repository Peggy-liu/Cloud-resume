const Photo = props => {
    return (
      <div className='photo'>
        <img src={props.src} alt={props.name}></img>
        <p className='photoCredit'>Credit: {props.credit}</p>
      </div>
    )
  }

  export default Photo;