import { render, screen } from "@testing-library/react"
import RES_CARD, { withDiscountTag } from "../RES_CARD"
import { MOCK_DATA } from "../Mocks/ResDataMock"
import "@testing-library/jest-dom";

describe("TESTing RES_CARD COMPONENT", () => {

    it("should render RES_CARD component", () => {

        render(<RES_CARD res_data={MOCK_DATA} />)
    })


    it("should render discount text in HOC RES_CARD component", () => {

        const ResPromoted = withDiscountTag(RES_CARD);

        render(<ResPromoted res_data={MOCK_DATA} />)

        const header = screen.getByText("60% OFF")

        expect(header).toBeInTheDocument();
    })

    
})