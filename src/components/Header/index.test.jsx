import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./index";

test("renders the logo and navigation links", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  expect(screen.getByAltText(/denver urban skate troop logo/i)).toBeInTheDocument();
  expect(screen.getByText(/welcome\/faq/i)).toBeInTheDocument();
  expect(screen.getByText(/routes/i)).toBeInTheDocument();
  expect(screen.getByText(/resources/i)).toBeInTheDocument();
  expect(screen.getByText(/shop/i)).toBeInTheDocument();
});
