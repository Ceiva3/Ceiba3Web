export default function Buy() {
  return (
    <div
      style={{
        paddingTop: "120px",
        backgroundColor: "#fff8eb",
        width: "100%",
        height: "500px",
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
        Sé parte del cambio
      </h1>
      <p
        className="lead"
        style={{
          paddingLeft: "600px",
          paddingRight: "600px",
          paddingTop: "15px",
        }}
      >
        Adquiere tu NFT, adopta una parcela y asegura su conservación. De la mano de artistas latino/americanos recibe arte e información del cuidado de tu parcela 
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
            ¡Compra ya!
          </button>
        </a>

      </div>
    </div>
  )
}