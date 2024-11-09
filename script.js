const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  let arr = Array.from(document.querySelectorAll(".price"));
	let sum = 0;
	arr.forEach((item)=> {
		 sum += parseInt(item.innerText);
	});
	let row =document.createElement("tr");
	row.setAttribute('id',"ans");
	let cell1 = document.createElement("td");
	cell1.innerText = "Total is: ";
	let cell2 = document.createElement("td");
	cell2.innerText = sum;
	row.appendChild(cell1)
	row.appendChild(cell2);
	table.appendChild(row);
};

getSumBtn.addEventListener("click", getSum);