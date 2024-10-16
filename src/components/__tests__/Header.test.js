const { render, screen, fireEvent } = require("@testing-library/react")
import "@testing-library/jest-dom";
import Header from '../Header'
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { DarkContext } from "../../utils/DarkContextProvider";
import { BrowserRouter } from "react-router-dom";

describe("unit testing for header component", () => {

    it("should render cart in header component", () => {

        const dummyValue = {
            Theme: "white",
            darkState: "Off",
            toggleTheme: jest.fn()
        }
        render(
            <DarkContext.Provider value={dummyValue} >
                <BrowserRouter>
                    <Provider store={appStore}>
                        <Header />
                    </Provider>
                </BrowserRouter>
            </DarkContext.Provider>
        )

        //querying

        const Cartitems = screen.getByText(/Cart/)
        //using regex to get cart txt
        //use correct name for finidng text

        //assertion
        expect(Cartitems).toBeInTheDocument()


    })

    it("should change sign in to sign out", () => {

        const dummyValue = {
            Theme: "white",
            darkState: "Off",
            toggleTheme: jest.fn()
        }
        render(
            <DarkContext.Provider value={dummyValue} >
                <BrowserRouter>
                    <Provider store={appStore}>
                        <Header />
                    </Provider>
                </BrowserRouter>
            </DarkContext.Provider>
        )


        const SignInBtn = screen.getByText("Sign In")

        //clicking sign in btn
        fireEvent.click(SignInBtn)

        const SignOut = screen.getByRole("button", { name: "Sign Out" })

        expect(SignOut).toBeInTheDocument()


    })




})