test("renders the page heading", () => {
    const { getByText } = render();
    const linkElement = getByText(/Things to do/i);
    expect(linkElement).toBeInTheDocument();
  });
  