import "./MotionBackground.css";

const MotionBackground = () => {
  return (
    <div className="motion-background">
      {[...Array(7)].map((_, index) => (
        <div
          key={index}
          className="bubble"
          style={{
            "--size": `${Math.random() * 4 + 2}rem`,
            "--left": `${Math.random() * 100}%`,
            "--duration": `${Math.random() * 3 + 2}s`,
            "--delay": `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default MotionBackground;
