import DarkContextProvider from "../../utils/DarkContextProvider"
import Body from "../Body"
import { render, act, screen, fireEvent, waitFor } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import ListOfRES from "../Mocks/ListofResMock.json"

import "@testing-library/jest-dom";


//replace browser fetch fn with out own mock fetch
//this will not make an actual api call only mocks fetch api call
//first fetch response i.e ListOfRes and convert to json
global.fetch = jest.fn(() => {
    return Promise.resolve(
        {
            json: () => {
                return Promise.resolve(ListOfRES)
            }
        }
    )
})

describe("Seach functionality testing", () => {

    it("should render body component", async () => {

        //toggle the theme
        const dummyValue = {
            Theme: "white",
            darkState: "Off",
            toggleTheme: jest.fn()
        }

        await act(async () => {
            render(
                <DarkContextProvider value={dummyValue}>
                    <BrowserRouter>
                        <Body />
                    </BrowserRouter>
                </DarkContextProvider>
            )
        })
    })


    it("should render search input box in body component", async () => {

        //toggle the theme
        const dummyValue = {
            Theme: "white",
            darkState: "Off",
            toggleTheme: jest.fn()
        }

        await act(async () => {
            render(
                <DarkContextProvider value={dummyValue}>
                    <BrowserRouter>
                        <Body />
                    </BrowserRouter>
                </DarkContextProvider>
            )
        })

        //find the search input box by test id
        const searchInputBox = screen.getByTestId("search input-box")

        //type the search query
        fireEvent.change(searchInputBox, { target: { value: "Pizza" } })

        //find the search btn
        const searchBtn = screen.getByRole("button", { name: "search" })

        //click the searchbtn
        fireEvent.click(searchBtn)

        //log the result
        // screen.debug()


        const Cards = await waitFor(() => screen.getAllByTestId("ResCards"))


        expect(Cards.length).toBe(4)
    })


    it("should render top res cards when top res btn is clicked", async () => {
        const dummyValue = {
            Theme: "white",
            darkState: "Off",
            toggleTheme: jest.fn()
        }

        await act(async () => {
            render(<BrowserRouter>
                <DarkContextProvider value={dummyValue}>
                    <Body />
                </DarkContextProvider>
            </BrowserRouter>)
        })


        const TopResBtn = screen.getByRole("button", { name: "Show Top restaurant" })

        fireEvent.click(TopResBtn)

        // screen.debug()
        const cards = await waitFor(() => screen.getAllByTestId("ResCards"))

        expect(cards.length).toBe(8)
    })
})