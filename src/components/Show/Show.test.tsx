import { render, screen } from "@testing-library/react";
import { Props, Show } from "./Show";

import { IShow } from "../../types/shared";
describe("components/Show", () => {
   const defaultProps: Pick<Props, "unSelectShow"> & { selectedShow: IShow } = {
      selectedShow: {
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
      unSelectShow: function (): void {
         throw new Error("Function not implemented.");
      },
   };
   it("renders the show details", () => {
      render(<Show {...defaultProps} />);
      expect(screen.getByText(defaultProps.selectedShow.name)).toBeInTheDocument();
      expect(
         screen.getByText(`Premiered ${defaultProps.selectedShow!.premiered}`)
      ).toBeInTheDocument();
      expect(
         screen.getByText(defaultProps.selectedShow!._embedded.cast[0].person.name)
      ).toBeInTheDocument();
   });
   it("triggers the onCancel callback when the back button is clicked", () => {
      const onCancel = jest.fn();
      render(<Show {...defaultProps} unSelectShow={onCancel} />);
      screen.getByText("Back to list").click();
      expect(onCancel).toHaveBeenCalled();
   });
});
