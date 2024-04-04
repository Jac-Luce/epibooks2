import { render, screen } from "@testing-library/react";
import Welcome from "./Welcome";

test('Viene renderizzato il componente welcome', () => {
    render(<Welcome />);

    const welcomeElement = screen.getByRole('paragraph', {name: /Hey, che bello vederti!/i});

    expect(welcomeElement).toBeInTheDocument();
})