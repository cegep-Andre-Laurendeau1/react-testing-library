import {render, screen} from "@testing-library/react";
import Header from "./Header";

describe('tests de header', () => {

    it('should render same text passed into title prop', async () => {
            render(<Header title="My Header"/>);
            const headingElement = screen.getByRole("heading", {name: "My Header"})
            const headingElement2 = screen.getByText("My Header")
            expect(headingElement).toBeInTheDocument();
            expect(headingElement2).toBeInTheDocument();
        }
    );

    it('should render same text passed into title prop 2', async () => {
            render(<Header title="My Header"/>);
            const headingElement = screen.getByRole("heading", {name: "My Header"})
            const headingElement2 = screen.getByText("My Header")
            const headingElement3 = screen.getByTestId("header-1")
            expect(headingElement).toBeInTheDocument();
            expect(headingElement2).toBeInTheDocument();
            expect(headingElement3).toBeInTheDocument();
        }
    );

    it('should render same text passed in title with find by', async () => {
            render(<Header title="My Header"/>);
            const headingElement = await screen.findByText("My Header")
            expect(headingElement).toBeInTheDocument();
        }
    );
    it('should render same text passed in title with queryBy', async () => {
            render(<Header title="My Header"/>);
            const headingElement = await screen.queryByText(/something else/i)
            expect(headingElement).not.toBeInTheDocument();
        }
    );

    it('should render same text passed in title with queryAllByRole', async () => {
            render(<Header title="My Header"/>);
            const headingElements = await screen.getAllByRole("heading")
            expect(headingElements.length).toBe(2)
        }
    );
})
