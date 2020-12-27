const Photo = props => {
    return (
      <div className='photo'>
        <img src={props.src} alt={props.name}></img>
        <p className='photoCredit' style={props.credit?{ }:{display:'none'}}>{"Credit: "+props.credit}</p>
      </div>
    )
  }

  export default Photo;