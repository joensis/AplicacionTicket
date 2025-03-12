import {screen, render, fireEvent} from "@testing-library/react";
import { describe, it, expect } from "vitest";
import '@testing-library/jest-dom';

import Principal_user from "../componentes/principal_user/Principal_user";
import { MemoryRouter } from "react-router";

describe("componente Principal user", ()=>{
    it("muestra componente mis incidencias", ()=>{
        render(
        <MemoryRouter>

            <Principal_user/> 
        </MemoryRouter>)
          
        
        fireEvent.click(screen.getByText(/Mis incidencias/));

        expect(screen.getByText((content, element) => content.includes('Incidencias nuevas'))).toBeInTheDocument();

        
              
    })


})