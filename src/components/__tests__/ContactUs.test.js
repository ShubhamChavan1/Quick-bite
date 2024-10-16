import ContactUS from "../ContactUS";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("test case for  contact us page ", () => {
    it("should render heading the contact us component", () => {

        render(<ContactUS />)

        const heading = screen.getByRole("heading")

        expect(heading).toBeInTheDocument()
    })

})