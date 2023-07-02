import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom'
import { NamedProfile, colorOptions, sizeOptions } from "../NamedProfile";

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`;
}

const values = {
    name: "Biplove Lamichhane",
    color: colorOptions.blue,
    size: sizeOptions.large,
}
 
describe("NamedProfile Component", () => {
    render(<NamedProfile name={values.name} color={values.color} />);
    let component = screen.getByTestId("namedProfile");
 
    test("First letter rendering", () => {
        expect(component).toHaveTextContent("B");
    })
    test("Background color props check", () => {
        const rgb = hexToRgb(values.color);
        expect(component.getAttribute("style").includes(`background-color: ${rgb}`)).toBeTruthy();
    })
    test("Size props check", () => {
        // check default size which should be small when props is not passed
        expect(component.getAttribute("style").includes(`font-size: ${values.size}`)).not.toBeTruthy();

        // rerendering after passing size props
        render(<NamedProfile name={values.name} color={values.color} size={values.size} />);
        component = screen.getByTestId("namedProfile");
        expect(component.getAttribute("style").includes(`font-size: ${values.size}`)).toBeTruthy();
    })
})

afterEach(() => {
    cleanup();
})