import {screen, render, fireEvent} from "@testing-library/react";
import { describe, it, expect } from "vitest";
import '@testing-library/jest-dom';

import Login_admin from "../componentes/principal_admin/Login_admin";

describe("componente login_admin", ()=>{
    it("muestra componente Adminitrar empleados", ()=>{
        render(<Login_admin/>);    
        
        fireEvent.click(screen.getByText(/Administración de empleados/));

        expect(screen.getByText((content, element) => content.includes('Crear empleado'))).toBeInTheDocument();

        
              
    })


})
