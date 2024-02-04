export default function Hero() {
  return (
    <div
      style={{
        paddingTop: "120px",
        backgroundColor: "#fff8eb",
        width: "100%",
        height: "600px",
        textAlign: "center",
        color: "#90743b",
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
        Tu parcela digital, Tu impacto en la vida real
      </h1>
      <p
        className="lead"
        style={{
          paddingLeft: "600px",
          paddingRight: "600px",
          paddingTop: "15px",
        }}
      >
        Tu parcela de tierra digital no es solo un activo digital, es un compromiso con el planeta. Nosotros nos encargamos de tus árboles mientras tú disfrutas del impacto positivo que estás generando.
      </p>
      <div
        className="text-center"
        style={{
          paddingLeft: "600px",
          paddingRight: "600px",
          paddingTop: "15px",
          paddingBottom: "15px",
        }}
      >
        <a href="/map">
          <button 
            type="button" 
            className="btn btn-primary btn-lg"
            style={{
              backgroundColor:"#1789E1",
              transition: "background-color 0.3s",
            }} 
            onMouseEnter={(e) => e.target.style.backgroundColor = "#0f70ba"}
            onMouseLeave={(e) => e.target.style.backgroundColor = "#1789E1"}
          >
            Explora tu parcela
          </button>
        </a>

      </div>
    </div>
  )
}