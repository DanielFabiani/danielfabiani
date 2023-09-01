/* eslint-disable react/prop-types */
import style from './AnimatedLetters.module.scss';

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {
        strArray.map((char, i) => (
          <span key={char + 1} className={`${letterClass} _${i + idx}`}>
            {char}
          </span>
        ))
      }
    </span>
  )
}

export default AnimatedLetters