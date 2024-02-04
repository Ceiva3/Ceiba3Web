export default function Who() {
  return (
    <div
      style={{
        paddingTop: "120px",
        backgroundImage: "url('/forestback.webp')",
        backgroundSize: "Cover",
        width: "100%",
        height: "500px",
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
      }}
    >
      <h1
        className="display-1"
        style={{
          fontWeight: "normal",
          paddingLeft: "400px",
          paddingRight: "400px",
        }}
      >
        Conocenos
      </h1>
      <p
        className="lead"
        style={{
          paddingLeft: "400px",
          paddingRight: "400px",
          paddingTop: "15px",
          textAlign: "justify",
        }}
      >
        Impulsados por un compromiso profundo con la sostenibilidad, hemos creado una plataforma donde la propiedad digital se encuentra con un impacto real en el mundo. A través de nuestro enfoque innovador, los usuarios pueden poseer parcelas digitales de tierra, cada una representando una oportunidad única para contribuir a esfuerzos de reforestación y proyectos de restauración ecológica en todo el mundo
      </p>
    </div>
  );
}
