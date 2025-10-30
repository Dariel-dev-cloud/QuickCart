import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500">
        <div className="w-4/5">
          <Image className="w-28 md:w-32" src={assets.logo} alt="logotipo" />
          <p className="mt-6 text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In eaque obcaecati voluptatum dolores, libero minus consectetur autem labore maiores officiis quod assumenda? Id sed necessitatibus, nam ex officiis omnis rerum.
          </p>
        </div>

        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Empresa</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a className="hover:underline transition" href="#">Inicio</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Sobre nosotros</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Contacto</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Política de privacidad</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Ponte en contacto</h2>
            <div className="text-sm space-y-2">
              <p>+5354685931</p>
              <p>contacto @DarielDev</p>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm">
        © 2025 DarielDev. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;