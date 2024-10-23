const scrollToTopLink = document.getElementById('timestamp');
// Function to convert Unix timestamp to a readable date
        function formatTimestamp(timestamp) {
            const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
            const options = { year: 'numeric', month: 'long', day: 'numeric' }; // Format options
            return date.toLocaleDateString(undefined, options); // Format date as a readable string
        }

        // Unix timestamp
        const unixTimestamp = 1439398512;
        
        // Display the formatted date
        document.getElementById('timestamp').innerText = formatTimestamp(unixTimestamp);