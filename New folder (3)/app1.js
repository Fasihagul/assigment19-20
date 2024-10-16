// question 1
function greet(){
    Swal.fire({
        title: " Hello Sweetii!",
        text: "hehehehehe",
        imageHeight: 200,
      });
}
function mobile(){
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "phone chahiye",
        showConfirmButton: false,
        timer: 1500
      });

}
function deleteRow(button) {
    // Get the row of the button that was clicked
    const row = button.closest('tr');
    // Remove the row from the table
    row.parentNode.removeChild(row);}

    let count = 0;

        const counterDisplay = document.getElementById('counter');
        const increaseButton = document.getElementById('increase');
        const decreaseButton = document.getElementById('decrease');

        increaseButton.addEventListener('click', () => {
            count++;
            counterDisplay.textContent = count;
        });

        decreaseButton.addEventListener('click', () => {
            count--;
            counterDisplay.textContent = count;
        });
   