import Footer from ".";
import { render } from "@testing-library/react";
import { ThemeProvider } from "../../Utils/context";

describe('Footer', () => {
    it('Should render without crash', async () => {
        render(
        <ThemeProvider>
        <Footer /></ThemeProvider>)
    })
})