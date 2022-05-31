import { render, screen } from "@testing-library/react";
import Header from "./index";

test("renders the correct contents", () => {
  render(<Header />);
  const subheading = screen.getByAltText(/best night of the week/i);
  const skates = screen.getByText(/skates/i);
  const about = screen.getByText(/about/i);

  expect(subheading).toBeInTheDocument();
  expect(skates).toBeInTheDocument();
  expect(about).toBeInTheDocument();
});
