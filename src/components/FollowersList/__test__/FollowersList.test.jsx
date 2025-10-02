import {render, screen} from "@testing-library/react";
import FollowersList from "../FollowersList";
import {BrowserRouter} from "react-router-dom";

const MockFollowersList = () => {
    return (
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <FollowersList />
        </BrowserRouter>
    )
}

describe('tests de followers', () => {

    beforeEach(() => {
        console.log("RUNNING BEFORE EACH TEST")
    })

    beforeAll(() => {
        console.log("RUNNING ONLY ONCE BEFORE ALL TEST")
    })

    afterEach(() => {
        console.log("RUNNING AFTER EACH TEST")
    })

    afterAll(() => {
        console.log("RUNNING ONLY ONCE AFTER ALL TEST")
    })

    it('find 1 follower card', async () => {
            render(<MockFollowersList />);
            const followerDivElement = await screen.findByTestId("follower-item-0")

            expect(followerDivElement).toBeInTheDocument();
        }
    );

    it('find 1 follower card (2)', async () => {
            render(<MockFollowersList />);
            const followerDivElement = await screen.findByTestId("follower-item-0")

            expect(followerDivElement).toBeInTheDocument();
        }
    );

    // it('find all follower card', async () => {
    //         render(<MockFollowersList />);
    //         const followerDivElements = await screen.findAllByTestId(/follower-item-/i)
    //         expect(followerDivElements.length).toBe(5);
    //     }
    // );
});