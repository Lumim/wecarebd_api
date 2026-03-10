import profile from "../assets/profile.png";

const Hero = () => {
  return (
    <section
      style={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "120px 20px",
        background: "linear-gradient(135deg,#0f172a,#1e293b)",
        color: "white"
      }}
    >
      <div style={{ maxWidth: "100%", width: "full" }}>
        
        <h1
          style={{
            fontSize: "64px",
            fontWeight: "700",
            marginBottom: "10px"
          }}
        >
          Lummim Sarker
        </h1>

        <h2
          style={{
            fontSize: "26px",
            fontWeight: "400",
            opacity: 0.8,
            marginBottom: "20px"
          }}
        >
          Software Architect / Full-Stack Engineer
        </h2>

        <p
          style={{
            
            opacity: 0.8,
            maxWidth: "600px",
            margin: "0 auto"
          }}
        >
          Building scalable web & mobile applications with React, Vue,
          TypeScript and modern backend systems. Passionate about
          data-driven interfaces, system architecture and performance
          optimization.
        </p>
     <img
      src={profile}
      style={{
        width: "200px",
        height: "180px",
        borderRadius: "50%",
        marginBottom: "20px"
      }}
    />
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            flexWrap: "wrap"
          }}
        >
          <a href="https://github.com/Lumim" target="_blank">
            <button
              style={{
                padding: "12px 28px",
                borderRadius: "8px",
                background: "#2563eb",
                color: "white",
                border: "none",
                cursor: "pointer",
                fontSize: "16px"
              }}
            >
              View GitHub
            </button>
          </a>

          <a href="mailto:lamimsarker@gmail.com">
            <button
              style={{
                padding: "12px 28px",
                borderRadius: "8px",
                background: "transparent",
                border: "1px solid #fff",
                color: "white",
                cursor: "pointer",
                fontSize: "16px"
              }}
            >
              Contact Me
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;