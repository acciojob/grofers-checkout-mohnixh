// Create a button and add it to the DOM
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

// Define the getSum function
const getSum = () => {
  // Select all elements with the class 'price'
  let arr = Array.from(document.querySelectorAll(".price"));
  let sum = 0;

  // Calculate the total price
  arr.forEach((item) => {
    sum += parseInt(item.innerText);
  });

  // Get the table element
  const table = document.querySelector("table");

  // Check if the total row already exists and remove it
  const existingRow = document.getElementById("ans");
  if (existingRow) {
    existingRow.remove();
  }

  // Create a new row to display the total
  let row = document.createElement("tr");
  row.setAttribute("id", "ans");

  // Create a single cell for the total price
  let cell = document.createElement("td");
  cell.colSpan = 2; // Span across both columns
  cell.innerText = `Total Price: Rs ${sum}`;

  // Append cell to row and row to table
  row.appendChild(cell);
  table.appendChild(row);
};

// Add an event listener to the button
getSumBtn.addEventListener("click", getSum);