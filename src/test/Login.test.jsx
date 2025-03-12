import { describe, it, expect } from "vitest";
import Login from "../componentes/login/Login";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import "@testing-library/jest-dom"



describe("componente Login", ()=>{

 it("renderizar login", ()=>{
   
   const { getByLabelText } = render(
   <MemoryRouter>
        (<Login />)
    </MemoryRouter>);
    
    expect(screen.getByLabelText(/Usuario/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Contraseña/i)).toBeInTheDocument();
 })


 it("mostrar mensaje error con datos erroneos",  async()=>{

    const {getByLabelText, getByText} = render (
      <MemoryRouter>
        <Login/>
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/Usuario/i), {target: {value: "usuarioInvalido"}} );
    fireEvent.change(screen.getByLabelText(/Contraseña/i), {target: {value: "contraseñaInvalida"}} );
    fireEvent.click(screen.getByText(/entrar/i));
    expect(await screen.findByText(/error al introducir las credenciales/i)).toBeInTheDocument();

    
 })
    

})