import { useParams } from 'react-router-dom'
import worksData from '../../data/works.json'
import './index.sass'
/* import { useEffect } from 'react' */

const WorkDetail = () => {
  const { index } = useParams()

  const worksDetails = worksData.works[index]

  return (
    <div className="content">
      <p className="title">{worksDetails.title}</p>
      <p className="description">{worksDetails.description}</p>
      <p className="description">{worksDetails.techs}</p>
      <button
        className="btn"
        onClick={() => window.open(worksDetails.url)}
      >
        View
      </button>
    </div>
  )
}

export default WorkDetail
