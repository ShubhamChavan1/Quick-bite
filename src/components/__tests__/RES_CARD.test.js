import { render, screen } from "@testing-library/react"
import RES_CARD, { withDiscountTag } from "../RES_CARD"
import restaurant from "../Mocks/ResDataMock.json"
import "@testing-library/jest-dom";

describe("Testing RES_CARD COMPONENT", () => {

    it("should render RES_CARD component", () => {

        render(<RES_CARD res_data={restaurant} />)
    })


    it("should render discount text in HOC RES_CARD component", () => {

        const ResPromoted = withDiscountTag(RES_CARD);

        render(<ResPromoted res_data={restaurant} />)

        const header = screen.getByText("₹100 OFF")

        expect(header).toBeInTheDocument();
    })


})