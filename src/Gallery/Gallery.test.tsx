import { fireEvent, render, waitFor, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Gallery from "./Gallery";



test("that the Gallery contains only the searched items", async () => {

    const testItems = {
        results : [
            {
                id : 999,
                name: "Rick",
                species: "Human",
                origin: {name: "Earth"},
                image: "http://imageurl/1"
            },
            {
                id : 111,
                name: "Eddy",
                species: "Human",
                origin: {name: "Earth"},
                image: "http://imageurl/2"
            },
            {
                id : 222,
                name: "Hansolo",
                species: "Alien",
                origin: {name: "Moon"},
                image: "http://imageurl/3"
            }
    ]};
    
    jest.spyOn(global, 'fetch').mockImplementation(() => {
        return Promise.resolve({
            status: 200,
            json: () => Promise.resolve(testItems)
        } as Response);
    });

    render(<Gallery />, {wrapper:MemoryRouter});

    await waitFor(() => {
        expect(screen.getAllByTestId("all-items").length).toBe(3);
    });

    const searchField = screen.getByTestId("gallery-search-input") as HTMLInputElement;
    fireEvent.change(searchField, {target: {value: "Eddy"}});
    

    await waitFor(() => {
        expect(screen.getByTestId("all-items").textContent).toEqual(" EddyHumanEarth");
        expect(screen.getAllByTestId("all-items").length).toBe(1);
    });
});



