# Auto Delete (React + TypeScript + Vite)

This code provides an automatic deletion. There is a list of crops on the left column of the table. When a user clicks a crop's name in the right column, it will move to the right columns according to its category. If a user clicks on a crop's name in the two right columns, it will return to the left column, right away. Otherwise, it will wait 5 seconds before returning to the left column.

The code was written with React + TS + Vite. The list of crops is given as a JSON file. 

The automatic deletion is done as follows:
- The CropTable function calls an async function startTimer, which runs for each selected crop.
- The startTimer function periodically probs has returned to the left column.
- If the selected crop has yet returned to the left column within five seconds, it will be forced to return.
