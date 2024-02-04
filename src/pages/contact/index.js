import styles from "@/styles/app.module.css";
import { DocsCard, HelloNearCard } from "@/components/cards";
import { NetworkId, ComponentMap } from "@/config";

const socialComponents = ComponentMap[NetworkId];

export default function Contact() {
  return (
    <main className={styles.main}>
      <div className={styles.header}
        style={{
          paddingTop: "80px",
          backgroundColor: "#fff8eb",
          width: "100%",
          height: "400px",
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
          Contáctanos
        </h1>
        <p 
          className="lead"
          style={{
            paddingLeft: "600px",
            paddingRight: "600px",
            paddingTop: "15px",
          }} 
        >
          ¿Tienes interés en llevar nuestras campañas educativas a tu empresa,
          escuela o comunidad? Ponte en contacto con nosotros para obtener más
          información de los planes de precio y beneficiarios que tenemos
          disponibles.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "120px",
          backgroundImage: "url('/forestback.webp')",
          backgroundSize: "Cover",
          width: "100%",
          height: "600px",
          textAlign: "center",
          color: "white",
          fontWeight: "bold",
        }}
      >
        <form style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", backgroundColor: "#fff8eb", padding: "45px" , color: "#90743b", width: "30%"}}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="lead">Correo Electrónico</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="lead">Nombre Completo</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="lead">Mensaje</label>
            <textarea type="password" class="form-control" id="exampleInputPassword1"/>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </main>
  );
}
