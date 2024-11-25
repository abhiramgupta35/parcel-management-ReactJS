## Parcel Management App
This is a simple parcel management app designed to automate parcel sorting at a distribution center. The system is built using React and Firebase and helps categorize parcels efficiently based on their weight and value.

## Features
Automatic Sorting

-Parcels are categorized into departments based on their weight:
-Up to 1 kg: Mail
-Up to 10 kg: Regular
-Over 10 kg: Heavy
-High-Value Flagging

## Parcels valued over €1000 are flagged for Insurance Approval before proceeding to the assigned department.


 ##   Technologies Used
-React.js: For the frontend user interface.
-Firebase Firestore: To store and manage parcel data.
-CSS: For styling and layout.

 ##     How to Run
-Clone this repository.
-Install dependencies:
-npm install
-Start the development server


 ## npm start
-Configure Firebase in firebase.js with your project details.
Usage
-Add parcel details like weight, value, receiver’s name, address, etc.
-View categorized parcels in the Parcel List page.
-Departments and business rules are automatically applied based on the data.

 ## Screenshots
 ![App Screenshot](https://github.com/abhiramgupta35/parcel-management-ReactJS/blob/5e2ca42e3247d38f01de5f1e438c827b9b897e8d/public/photo-collage.png.png)

Parcel Form: Add parcel details.
Parcel List: View sorted parcels by department.

 ##  Future Improvements
Add user authentication.
Make sorting rules customizable for different businesses.
Optimize the UI for mobile devices.

## Author
Built by Abhiram for a parcel management assessment. 😊


