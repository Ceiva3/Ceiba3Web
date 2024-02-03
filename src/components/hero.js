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
        Your Digital Plot, Your Real Impact
      </h1>
      <p
        className="lead"
        style={{
          paddingLeft: "600px",
          paddingRight: "600px",
          paddingTop: "15px",
        }}
      >
        Your digital plot of land is not just a digital asset, it's a
        commitment to the planet. We take care of your trees while you enjoy
        the positive impact you're making.
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
          Explore Your Plot
        </button>

      </div>
    </div>
  )
}