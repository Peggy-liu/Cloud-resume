import React from 'react'
import './App.css'
import Theme from './Theme'
import no87 from './images/no87.png'
import pinkcloud from './images/pinkcloud.png'
import no108 from './images/no108.png'
import no111 from './images/no111.png'
import no91 from './images/no91.png'

const Gallery = () => {
  return (
    <div id='gallery'>
      <Theme
        titleBoxStyle='gallery-title-box'
        titleStyle='gallery-title'
        titleValue='CLOUD GALLERY'
      />
      <Photo
        src={no87}
        alt='atmosphere no 87'
        credit='https://www.robischongallery.com/artist/IAN_FISHER/works/7611'
      />
      <Intro />
      <Photo
        src={pinkcloud}
        alt='pinkcloud'
        credit='Ian Fisher https://www.ianfisherart.com/gallery/painting'
      />
      <Photo
        src={no108}
        alt='atmosphere 108'
        credit='Ian Fisher https://www.robischongallery.com/artist/IAN_FISHER/works/7603'
      />
      <Photo
        src={no111}
        alt='atmosphere 111'
        credit='Ian Fisher https://www.robischongallery.com/artist/IAN_FISHER/works/7600'
      />
      <Photo
        src={no91}
        alt='atmosphere 91'
        credit='Ian Fisher https://www.robischongallery.com/artist/IAN_FISHER/works/7613'
      />
    </div>
  )
}

const Photo = props => {
  return (
    <div className='photo'>
      <img src={props.src} alt={props.name}></img>
      <p className='photoCredit'>Credit: {props.credit}</p>
    </div>
  )
}

const Intro = () => {
  return (
    <div className='introBox'>
      <p className='intro'>
        A COLLECTION OF MY PERSONAL PICK OF ARTWORKS FROM IAN FISHER, <br />
        ONE OF MY FAVOURITE ARTISTS, <br />
        WHO IS DEDICATED TO PORTRAIT CLOUDS IN VARIOUS MOODS AND SHAPES. <br />
        HE PAINTS CLOUDS IN TURBULENT, SKYSCAPES FULL OF COLOR, PUFF, SWIRL AND
        ORGANIC DRAMA. <br />
        CLOUDS KNOCK INTO CLOUDS, SHARING, OVERLAYING, INFILTRATING EACH OTHER’S
        AIRSPACE. <br />
        CONTAINED ON LARGE CANVASES, IT CAN BE STUNNING.
      </p>
    </div>
  )
}
export default Gallery
