const { json } = require("express")

global.fetch = jest.fn(() => {
    return Promise.resolve(
        {
            json: () => {
                return Promise.resolve(data)
            }
        }
    )
})