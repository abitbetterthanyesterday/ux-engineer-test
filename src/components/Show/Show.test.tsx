import { Props, Show } from "./Show";
import { render, screen } from "@testing-library/react";
describe("components/Show", () => {
   const defaultProps: Props = {
      show: {
         id: 1,
         name: "Test Show",
         summary: "Test Summary",
         image: {
            medium: "test-medium.jpg",
            original: "test-original.jpg",
         },
         premiered: "2021-01-01",
         _embedded: {
            cast: [
               {
                  person: {
                     name: "Test Person",
                     image: {
                        medium: "test-medium.jpg",
                     },
                  },
                  character: {
                     name: "Test Character",
                  },
               },
            ],
         },
      },
      onCancel: function (): void {
         throw new Error("Function not implemented.");
      },
   };
   it("renders the show details", () => {
      render(<Show {...defaultProps} />);
      expect(screen.getByText(defaultProps.show.name)).toBeInTheDocument();
      expect(
         screen.getByText(`Premiered ${defaultProps.show.premiered}`)
      ).toBeInTheDocument();
      expect(
         screen.getByText(defaultProps.show._embedded.cast[0].person.name)
      ).toBeInTheDocument();
   });
   it("triggers the onCancel callback when the back button is clicked", () => {
      const onCancel = jest.fn();
      render(<Show {...defaultProps} onCancel={onCancel} />);
      screen.getByText("Back to list").click();
      expect(onCancel).toHaveBeenCalled();
   });
});
