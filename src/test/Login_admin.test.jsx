import { describe, it, expect } from "vitest";
import Login_admin from "../componentes/principal_admin/Login_admin";
import {render, screen} from "@testing-library/react";
import { MemoryRouter } from "react-router";
import "@testing-library/jest-dom"; 


describe('componente Login_admin', ()=>{

    it('renderizar login_admin', ()=>{
        const {getByText} = render (
            <MemoryRouter>
                <Login_admin/>
            </MemoryRouter>
        )
        expect(screen.getByText((content, element) => content.includes('seleccionar opción'))).toBeInTheDocument();
        expect(screen.getByText((content, element) => content.includes('Incidencias'))).toBeInTheDocument();
        expect(screen.getByText((content, element) => content.includes('Administración de usuarios'))).toBeInTheDocument();
        expect(screen.getByText((content, element) => content.includes('Administración de empleados'))).toBeInTheDocument();
        expect(screen.getByText((content, element) => content.includes('Administrar las incidencias recibidas'))).toBeInTheDocument();
        expect(screen.getByText((content, element) => content.includes('Administrar la creación y la modificación de usuarios'))).toBeInTheDocument();
        expect(screen.getByText((content, element) => content.includes('Administrar los empleados'))).toBeInTheDocument();

    })
})