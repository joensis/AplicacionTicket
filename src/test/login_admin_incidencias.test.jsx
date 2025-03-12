import {screen, render, fireEvent} from "@testing-library/react";
import { describe, it, expect } from "vitest";
import '@testing-library/jest-dom';

import Login_admin from "../componentes/principal_admin/Login_admin";

describe("componente login_admin", ()=>{
    it("muestra componente incidencias", ()=>{
        render(<Login_admin/>);    
        
        fireEvent.click(screen.getByText(/Incidencias/));

        expect(screen.getByText((content, element) => content.includes('Nuevas incidencias'))).toBeInTheDocument();

        
              
    })


})