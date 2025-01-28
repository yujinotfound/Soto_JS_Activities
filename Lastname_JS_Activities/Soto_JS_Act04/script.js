const dateForm = document.getElementById("dateForm");
        const resultDiv = document.getElementById("result");

        dateForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form from submitting

            
            const startDate = new Date(document.getElementById("startDate").value);
            const endDate = new Date(document.getElementById("endDate").value);

            // Calculate difference in days
            const differenceInTime = endDate - startDate; 
            const differenceInDays = differenceInTime / (1000 * 60 * 60 * 24); 

            // Display result
            if (differenceInDays >= 0) {
                resultDiv.textContent = `The difference is ${differenceInDays} days.`;
            } else {
                resultDiv.textContent = "End date must be after start date.";
            }
        })