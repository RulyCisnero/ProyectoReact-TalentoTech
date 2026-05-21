import Directorio from '../equipo/Directorio';
import {
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-stone-400 text-light mt-5 pt-4">
      <div className="container">

        <h5 className="mb-3">Nuestro equipo</h5>
        <Directorio />
        <h3>Seguinos en redes</h3>
        <div className="socials">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>

          <a
            href="https://wa.me/549123456789"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
        <hr />
        <p className="text-center">© Todos los derechos reservados Pipa 2026</p>
      </div>
    </footer>
  );
}

export default Footer;