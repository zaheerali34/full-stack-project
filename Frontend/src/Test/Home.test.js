import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Home } from "../Components/Home/Home"

describe("Home", ()=> {
    it("should render the heading", ()=> {
        render(<Home />);
        expect(screen.getByText("What will you")).toBeInTheDocument();
    });
});