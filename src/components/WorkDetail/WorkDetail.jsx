import { useParams } from 'react-router-dom'
import worksData from '../../data/works.json'
import './index.scss'
import Atropos from 'atropos/react'

const WorkDetail = () => {
  const { index } = useParams()

  const worksDetails = worksData.works[index]

  return (
    <div className="container workDetail-page">
      <Atropos className="my-atropos">
        <div className="image-box">
          <img
            src={worksDetails.cover}
            alt="cover image"
            className="work-image"
          />
          <div className="work-info">
            <p className="title">{worksDetails.title}</p>
            <p className="description">{worksDetails.description}</p>
            <p className="techs">Techs that I use:</p>
            <p className="description">{worksDetails.techs}</p>
            <button
              className="btn"
              onClick={() => window.open(worksDetails.url)}
            >
              View
            </button>
          </div>
        </div>
      </Atropos>
    </div>
  )
}

export default WorkDetail
