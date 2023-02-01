import { FaGithub,FaFigma } from 'react-icons/fa';

import styles from './Card.module.css'

const assets = require('../assets/assets.js')

function Card({title, src, alt, description, imgStyle, link, github = "", figma = ""}) {
    return (
      <div className={styles.project_card}> 
            <h4>{title}</h4>
            <a href={link} className={styles.img}>
              <img src={assets[src]} alt={alt} style={imgStyle} />
            </a> 
            <span>{description}</span>
            {github.length > 0 &&
              <a href={github}>
                <FaGithub/>
              </a>
            }
            {figma.length > 0 &&
              <a href={figma}>
                <FaFigma/>
              </a>
            }
      </div>
    )
}

export default Card;
