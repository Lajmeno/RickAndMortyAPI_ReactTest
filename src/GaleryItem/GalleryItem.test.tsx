import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import GalleryItem from './GalleryItem';



test('that my Item is rendered correctly', () => {

    const testRick = {
        id : 999,
        name: "Rick",
        species: "Human",
        origin: {name: "Earth"},
        image: "http://imageurl"
    }

    const {getByTestId} = render(<GalleryItem character = {testRick} />, {wrapper : MemoryRouter});
    expect(getByTestId("gallery-test-item").textContent).toEqual(" RickHumanEarth");

    const imageTag = getByTestId("gallery-test-item-img") as HTMLImageElement;
    expect(imageTag.src).toEqual("http://imageurl/");
})






