import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MyContext } from "../Context/Context";
import CatList from "./CatList";
import "./Hero.css";

export default function Hero() {
  const { display } = useContext(MyContext);

  return (
    <Container className="py-4">
      <Row className="g-4">
        {/* Sidebar - 3 columns on medium and larger screens */}
        <Col lg={3} md={4}>
          <div className="sidebar p-4 rounded-5">
            <h4 className="mb-4 cat fw-bold">Categories</h4>
            <ul className="list-unstyled">
              <CatList icon="🎯" type="All" />
              <CatList icon="🎬" type="Action" />
              <CatList icon="🗺️" type="Adventure" />
              <CatList icon="😄" type="Comedy" />
              <CatList icon="🎭" type="Drama" />
              <CatList icon="🔮" type="Fantasy" />
              <CatList icon="👻" type="Horror" />
              <CatList icon="👶" type="Kids" />
              <CatList icon="🔍" type="Mystery" />
            </ul>
          </div>
        </Col>

        {/* Main Content - 9 columns on medium and larger screens */}
        <Col lg={9} md={8}>
          <div className="content-area p-4 rounded-5">
            {display.length <= 0 && (
              <div className="glass-container p-2 text-center warning-container animate-pulse">
                <span className="warning-icon">⚠️</span>
                <h3 className="text-warning mb-0">No Cartoon found.</h3>
              </div>
            )}
            {display.length > 0 && (
              <Row className="g-4">
                <h2 className="mb-4 type-cards fw-bold title-cards">
                  Cartoons
                </h2>
                {display.map((character) => (
                  <Col
                    key={character.name}
                    xs={12}
                    md={6}
                    lg={4}
                    className="mb-4"
                  >
                    <div
                      className="glass-container p-3 cards"
                      style={{ height: "450px" }}
                    >
                      <div
                        className="card-image-container mb-3 rounded-3"
                        style={{ height: "300px", overflow: "hidden" }}
                      >
                        <img
                          src={`./images/${character.src}`}
                          alt={character.name}
                          className="w-120 h-100"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <h5 className="name">{character.name}</h5>
                      <p className="description small text-light mb-2">
                        {character.description}
                      </p>
                    </div>
                  </Col>
                ))}
              </Row>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
