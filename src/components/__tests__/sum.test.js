import { sum } from "../sum"

test("it should return sum of two number" , () =>{
    const result = sum(2,2)

   expect(result).toBe(4)  
})