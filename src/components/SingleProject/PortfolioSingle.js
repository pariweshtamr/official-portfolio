import { useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { getSingleProjectSuccess } from "../../redux/Project/ProjectSlice"
import "./portfolioSingle.scss"

const PortfolioSingle = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { selectedProject, projects } = useSelector((state) => state.project)
  const specificProject = projects.find((p) => p.id === id)

  useEffect(() => {
    dispatch(getSingleProjectSuccess(specificProject))
  }, [dispatch, specificProject])

  return (
    <>
      <div className="top-bg">
        <div className="top-bg-overlay"></div>
      </div>
      <Container flutitle className="single-project-container">
        <Row className="p-5">
          <div className="project-section-title">
            <div className="title-frame">
              <h4 className="fw-bold">{selectedProject.title}</h4>
              <Link to="/portfolio" className="back">
                Back
              </Link>
            </div>

            <div className="title-right">
              <div className="category">{selectedProject.category}</div>
            </div>
          </div>

          <div className="project-image pt-4">
            <img src={selectedProject.image} alt="project-img" />
          </div>
        </Row>

        <Row className="px-5">
          <h4 className="fw-bold">Project details</h4>
          <Row className="mb-5 g-3">
            <Col md={8}>
              <div className="project-description">
                <h6 className="fw-bold">Description</h6>
                <p>{selectedProject.details}</p>
                {selectedProject?.visit && selectedProject?.source ? (
                  <div className="project-links d-flex justify-content-between">
                    <a
                      className="project-link"
                      href={selectedProject.visit}
                      target="_blank"
                      rel="noreferrer nofollow noopener"
                    >
                      DEMO
                    </a>
                    <a
                      className="project-link"
                      href={selectedProject.source}
                      target="_blank"
                      rel="noreferrer nofollow noopener"
                    >
                      SOURCE
                    </a>
                  </div>
                ) : (
                  <a
                    className="project-link"
                    href={selectedProject.source}
                    target="_blank"
                    rel="noreferrer nofollow noopener"
                  >
                    SOURCE
                  </a>
                )}
              </div>
            </Col>

            <Col md={4}>
              <div className="project-description">
                <ul className="p-0 m-0">
                  <li className="d-flex justify-content-between">
                    <strong>Start Date:</strong>
                    <span> {selectedProject.start}</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <strong>End Date:</strong>
                    <span> {selectedProject.end}</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <strong>Status:</strong>
                    <span> {selectedProject.status}</span>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Row>

        {selectedProject?.subImgs && (
          <Row className="px-5 mb-5">
            <h4 className="fw-bold mb-4">Result</h4>

            <div
              className={
                selectedProject?.subImgs.length > 2
                  ? "project-imgs-container"
                  : "project-imgs-container2"
              }
            >
              {selectedProject?.subImgs?.map((obj, i) => (
                <img
                  src={obj.img}
                  alt="proj-img"
                  className="proj-img"
                  key={i}
                />
              ))}
            </div>
          </Row>
        )}
      </Container>
    </>
  )
}

export default PortfolioSingle
