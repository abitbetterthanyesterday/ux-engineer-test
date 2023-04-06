import { Props, ShowList } from "./ShowList";
import { render, screen } from "@testing-library/react";

import { IShow } from "../../types/shared";
import { MOCK_SHOWS } from "../../tests/fixtures";

describe("components/ShowList", () => {
   const defaultProps: Props = {
      shows: MOCK_SHOWS,
      onSelectShow: function (show: IShow): void {
         throw new Error("Function not implemented.");
      },
   };
   it("renders a list of shows", () => {
      render(<ShowList {...defaultProps} />);
      const listItems = screen.getAllByRole("listitem");

      let itemIndex = 0;
      for (const show of MOCK_SHOWS) {
         expect(listItems[itemIndex]).toHaveTextContent(show.name);
         itemIndex++;
      }
   });

   it("trigger the onSelectShow callback when a show is clicked", () => {
      const onSelectShow = jest.fn();
      render(<ShowList {...defaultProps} onSelectShow={onSelectShow} />);
      const listItems = screen.getAllByRole("listitem");

      let itemIndex = 0;
      for (const show of MOCK_SHOWS) {
         listItems[itemIndex].click();
         expect(onSelectShow).toHaveBeenCalledWith(show);
         itemIndex++;
      }
   });
});
