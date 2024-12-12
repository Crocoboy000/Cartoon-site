import { Container } from "react-bootstrap";
import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import MotionBackground from "./components/MotionBackground";

function App() {
  return (
    <>
      <MotionBackground />
      <Container className="min-vh-100 containerp text-light position-relative">
        <Header />
        <Hero />
      </Container>
    </>
  );
}

export default App;
