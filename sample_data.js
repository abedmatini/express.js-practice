const mongoose = require('mongoose');
const Employee = require('./employee'); // Update with the actual path to your model

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/employeeDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");

        // Insert sample data
        Employee.create([
            { emp_name: "John Doe", age: 30, location: "New York", email: "john.doe@example.com" },
            { emp_name: "Jane Smith", age: 25, location: "Los Angeles", email: "jane.smith@example.com" },
            { emp_name: "Michael Johnson", age: 35, location: "Chicago", email: "michael.johnson@example.com" }
        ])
        .then((docs) => {
            console.log("Sample data inserted:", docs);
            mongoose.connection.close(); // Close the connection after inserting
        })
        .catch((err) => {
            console.error("Error inserting sample data:", err);
        });

    })
    .catch((err) => {
        console.error("Connection error:", err);
    });
