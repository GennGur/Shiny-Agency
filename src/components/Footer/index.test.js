import Footer from ".";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "../../Utils/context";

describe('Footer', () => {
    it('Should render without crash', async () => {
        render(
        <ThemeProvider>
        <Footer /></ThemeProvider>)
    })
})

it('Change theme', async () => {
    render(
        <ThemeProvider>
            <Footer />
        </ThemeProvider>
    )
    const nightModeButton = screen.getByRole('button')
    expect(nightModeButton.textContent).toBe('Changer de mode : ☀️ ')
    fireEvent.click(nightModeButton)
    expect(nightModeButton.textContent).toBe('Changer de mode : 🌙 ')
})