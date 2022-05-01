import { render, screen } from "@testing-library/react";
import ComingSoon from "./index";

test("displays under-construction message", () => {
  render(<ComingSoon />);
  const subheading = screen.getByText(/best night of the week/i);
  const comingSoon = screen.getByText(/coming soon/i);
  const meanwhile = screen.getByText(/meanwhile/i);

  expect(subheading).toBeInTheDocument();
  expect(comingSoon).toBeInTheDocument();
  expect(meanwhile).toBeInTheDocument();
});

test("renders social media links", () => {
  render(<ComingSoon />);
  const instagramLink = screen.getByText(/instagram/i);
  const facebookLink = screen.getByText(/facebook/i);

  expect(instagramLink).toBeInTheDocument();
  expect(facebookLink).toBeInTheDocument();
});
