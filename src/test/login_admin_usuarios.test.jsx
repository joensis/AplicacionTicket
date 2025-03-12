
import { expect, describe, it} from "vitest"
import {render, screen, fireEvent} from "@testing-library/react"
import '@testing-library/jest-dom';
import Login_admin from "../componentes/principal_admin/Login_admin";

describe('complemento Administrar_usuarios', ()=>{

    it('muestra componente Administrar_usuarios', ()=>{
        render(<Login_admin/>)

        fireEvent.click(screen.getByText(/Administración de usuarios/));

        expect(screen.getByText((content, element)=>content.includes('Crear usuario'))).toBeInTheDocument();

    })

})