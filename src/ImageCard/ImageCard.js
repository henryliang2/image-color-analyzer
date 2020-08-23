import React from 'react';
import './ImageCard.css';
import ReactTooltip from 'react-tooltip';


const ImageCard = (props) => {

  const { url, id, dimension } = props

  return (
      <React.Fragment>
        <img 
          src={url} 
          id={"image" + id}
          alt={"image " + id}
          width={dimension}
          height={dimension}
        />
      </React.Fragment>
  );
} 


export default ImageCard;