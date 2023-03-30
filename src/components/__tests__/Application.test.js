import React from "react";
import {
  render,
  cleanup,
  waitForElement,
  fireEvent,
  getByText,
  prettyDOM,
  getAllByTestId,
  getByAltText,
  getByPlaceholderText,
  queryByText

} from "@testing-library/react";

import Application from "components/Application";

afterEach(cleanup);

describe("Application", () => {
  // using promises
  it("defaults to Monday and changes the schedule when a new day is selected", () => {
    const { getByText } = render(<Application />);

    return waitForElement(() => getByText("Monday"))
      .then(() => {
        fireEvent.click(getByText("Tuesday"));
        expect(getByText("Leopold Silvers")).toBeInTheDocument();
      });
  });

  //   // using async await
  //   it("changes the schedule when a new day is selected", async () => {
  //     const { getByText } = render(<Application />);

  //     await waitForElement(() => getByText("Monday"));

  //     fireEvent.click(getByText("Tuesday"));

  //     expect(getByText("Leopold Silvers")).toBeInTheDocument();
  //   });

  it("loads data, books an interview and reduces the spots remaining for Monday by 1", async () => {
    const { container, debug } = render(<Application />);

    await waitForElement(() => getByText(container, "Archie Cohen"))

    const appointments = getAllByTestId(container, "appointment");

    const appointment = appointments[0];

    fireEvent.click(getByAltText(appointment, "Add"));

    fireEvent.change(getByPlaceholderText(appointment, /enter student name/i), {
      target: { value: "Lydia Miller-Jones" }
    });

    fireEvent.click(getByAltText(appointment, "Sylvia Palmer"));
    fireEvent.click(getByText(appointment, "Save"));

    // checks the "Saving" keyword as we know it goes from CREATE > SAVING (STATUS) > SHOW. mean's it's working correctly after a click
    expect(getByText(appointment, "Saving")).toBeInTheDocument();

    await waitForElement(() => getByText(appointment, "Lydia Miller-Jones"));

    const day = getAllByTestId(container, "day").find(day =>
      queryByText(day, "Monday")
    );
    expect(getByText(day, "no spots remaining")).toBeInTheDocument();
  });

  // Create tests for the following
  // "loads data, cancels an interview and increases the spots remaining for Monday by 1"
  // "loads data, edits an interview and keeps the spots remaining for Monday the same"
  // "shows the save error when failing to save an appointment"
  // "shows the delete error when failing to delete an existing appointment"

  // it("loads data, books an interview and reduces the spots remaining for Monday by 1", async () => {
//   it("loads data, cancels an interview and increases the spots remaining for Monday by 1", async () => {
    

// // 1. Render the Application.
// const { container } = render(<Application />);

// // 2. Wait until the text "Archie Cohen" is displayed.
// await waitForElement(() => getByText(container, "Archie Cohen"));

// // 3. Click the "Add" button on the first empty appointment.
// 3. Click the "cancel" button on the first filled appointment
// 4. click the "confirm" button
// 5. look for "deleteing" status is displayed
// 6. wait until the elements load and find appointment with no text with same day as deleted.
// 7. check the daylistitem with the same day also has the text with 1 spot remaining
// 7.
// // 4. Enter the name "Lydia Miller-Jones" into the input with the placeholder "Enter Student Name".
// // 5. Click the first interviewer in the list.
// // 6. Click the "Save" button on that same appointment.
// // 7. Check that the element with the text "Saving" is displayed.
// // 8. Wait until the element with the text "Lydia Miller-Jones" is displayed.
// // 9. Check that the DayListItem with the text "Monday" also has the text "no spots remaining".




//     // 1. Render the Application.
//     const { container } = render(<Application />);
  
//     // 2. Wait until the text "Archie Cohen" is displayed.
//     await waitForElement(() => getByText(container, "Archie Cohen"));
  
//     // 3. Click the "Add" button on the first empty appointment.
//     const appointments = getAllByTestId(container, "appointment");
//     const appointment = appointments[0];
//     fireEvent.click(getByAltText(appointment, "Add"));

//     // 4. Enter the name "Lydia Miller-Jones" into the input with the placeholder "Enter Student Name".
//     fireEvent.change(getByPlaceholderText(appointment, /enter student name/i), {
//       target: { value: "Lydia Miller-Jones" }
//     });

//     // 5. Click the first interviewer in the list.
//     fireEvent.click(getByAltText(appointment, "Sylvia Palmer"));

//     // 6. Click the "Save" button on that same appointment.
//     fireEvent.click(getByText(appointment, "Save"));

//     // 7. Check that the element with the text "Saving" is displayed.
//     expect(getByText(appointment, "Saving")).toBeInTheDocument();

//     // 8. Wait until the element with the text "Lydia Miller-Jones" is displayed.
//     await waitForElement(() => getByText(appointment, "Lydia Miller-Jones"));

//     // 9. Check that the DayListItem with the text "Monday" also has the text "no spots remaining".
//     const day = getAllByTestId(container, "day").find(day =>
//       queryByText(day, "Monday")
//     );
//     expect(getByText(day, "no spots remaining")).toBeInTheDocument();
//   });

it("loads data, cancels an interview and increases the spots remaining for Monday by 1", async () => {
  // 1. Render the Application.
  // 2. Wait until the text "Archie Cohen" is displayed.
  // 3. Click the "Delete" button on the booked appointment.
  // 4. Check that the confirmation message is shown.
  // 5. Click the "Confirm" button on the confirmation.
  // 6. Check that the element with the text "Deleting" is displayed.
  // 7. Wait until the element with the "Add" button is displayed.
  // 8. Check that the DayListItem with the text "Monday" also has the text "2 spots remaining".
});
});