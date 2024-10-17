import { render, act, screen, fireEvent } from "@testing-library/react"
import Restaurant from "../Restaurant"
import RES_MENU from "../Mocks/ResMenuMock.json"
import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import DarkContextProvider from "../../utils/DarkContextProvider"
import Header from "../Header"
import Cart from "../Cart"


describe("testing the add to cart functionality", () => {

    global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(RES_MENU) }))

    it("should render restaurant menu page of res card", async () => {


        await act(async () => {
            render(
                <Restaurant />
            )
        })
    })

    it("should render the items inside an accordian header", async () => {

        await act(async () => {
            render(
                <Provider store={appStore}>
                    <Restaurant />
                </Provider>)

        })


        const accordianHEADER = screen.getByText("Burgers With Millet Bun (6)")
        fireEvent.click(accordianHEADER)

        expect(screen.getAllByTestId("food-items").length).toBe(6)
    })

    it("when add btn is clicked for a food item it should update the cart", async () => {

        const dummyValue = {
            Theme: "white",
            darkState: "Off",
            toggleTheme: jest.fn()
        }

        await act(async () => {
            render(

                <Provider store={appStore}>
                    <BrowserRouter>
                        <DarkContextProvider value={dummyValue}>
                            <Header />
                        </DarkContextProvider>
                        <Restaurant />
                    </BrowserRouter>
                </Provider>
            )
        })


        const accordianHEADER = screen.getByText("Burgers With Millet Bun (6)")
        fireEvent.click(accordianHEADER)

        const addbtn = screen.getAllByRole("button", { name: "ADD" })

        //getting the first add btn from array of add btns
        expect(addbtn[0]).toBeInTheDocument()

        //click the first add btn
        //18th time
        fireEvent.click(addbtn[0])

        expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument()

    })

    it("check the cart page as 1 food item", async () => {

        const dummyValue = {
            Theme: "white",
            darkState: "Off",
            toggleTheme: jest.fn()
        }

        await act(async () => {
            render(
                <Provider store={appStore}>
                    <BrowserRouter>
                        <DarkContextProvider value={dummyValue}>
                            <Header />
                        </DarkContextProvider>
                        <Restaurant />
                        <Cart />
                    </BrowserRouter>
                </Provider>
            )
        })

        const accordianHEADER = screen.getByText("Fries & Sides (17)")

        fireEvent.click(accordianHEADER)

        const addbtn = screen.getAllByRole("button", { name: "ADD" })

        //getting the first add btn from array of add btns
        expect(addbtn[0]).toBeInTheDocument()

        //click the first add btn
        //this 19th time the btn is clicked
        /*
        there are 17 items in the accordian 
            the same add[0] is clicked twice above on line no 77 and here
               now there 19 items that means two items which we added in cart 
        */
        fireEvent.click(addbtn[0])

        expect(screen.getAllByTestId("food-items").length).toBe(19)


    })

})