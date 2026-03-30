# CARELINK – Continuity of Care Referral System

## Overview
CareLink is an offline-first digital health system designed to improve continuity of care in rural Kenya. The system enables Community Health Workers (CHWs) to capture, store, and retrieve patient health information in low-connectivity environments.

This prototype focuses on core healthcare workflows such as patient registration, record management, and basic follow-up tracking, while simulating offline functionality using local storage.

---

## Problem Statement
In rural Kenya, healthcare systems rely heavily on paper-based records, leading to:
- Lost or incomplete patient data
- Missed follow-ups
- Delayed diagnoses
- Poor continuity of care

Community Health Workers often operate in areas with limited or no internet connectivity, making it difficult to maintain accurate and accessible patient records.

---

## Proposed Solution
CareLink provides a simple, accessible, and offline-capable system that allows healthcare workers to:
- Register patients
- Store and retrieve patient records
- Track visits and follow-ups
- Maintain continuity of care without relying on constant internet access

---

## System Actors
- **Community Health Worker (Primary User)**  
  Registers patients, manages records, and tracks follow-ups.

- **Administrator (Conceptual Role)**  
  Manages system oversight and configuration (represented in system design).

---

## Features Implemented
- ✅ User Login System (Authentication simulation)
- ✅ Dashboard Interface
- ✅ Patient Registration
- ✅ Patient Record Storage (Offline simulation using localStorage)
- ✅ View Patient Records
- ✅ Navigation between system pages
- ✅ Logout functionality

---

## System Design
The system was designed using UML diagrams, including:
- Use Case Diagram
- Class Diagram
- Component Diagram
- Sequence Diagram

These diagrams define system structure, actors, workflows, and interactions.

---

## 🛠️ Technologies Used
- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js (Express)  
- **Storage:** Local Storage (for offline simulation)  
- **Deployment:** Render  

---

## 🚀 How to Run the Project Locally

Follow these steps carefully:

### 1. Clone the Repository

```bash
git clone https://github.com/ndunge-mbithi/carelink.git
cd carelink

### 2. Install Dependencies

npm install

### 3. Run the Server

node server.js

Open in browser
Go to:
http://localhost:3000

Live Deployment

The system is publicly accessible here:

 https://carelink-wiv2.onrender.com

Demo Login Credentials

Use the following credentials to test the system:
Username: admin
Password: 1234

Prototype Notes
	•	This is a functional prototype designed to demonstrate system workflows.
	•	Data is stored locally in the browser using localStorage.

Alignment with SRS

This prototype reflects key functional requirements from the Software Requirements Specification, including:
	•	User authentication
	•	Patient registration
	•	Record management
	•	Offline functionality
	•	Navigation and usability

Limitations
•	Limited to core features for demonstration purposes

HOW TO TEST THE SYSTEM
1. Open the app in your browser
2. Login using the demo credentials
3. You will be redirected to the dashboard
4. Add a new patient (name + age)
5. Click "View Patients"
6. Confirm the patient appears in the list
7. Navigate back to dashboard
8. Logout and test login again

PROJECT STRUCTURE
carelink/
│
├── server.js        # Backend server (Node.js + Express)
├── package.json     # Project dependencies
├── database.db      # SQLite database (auto-created)
├── index.html       # Frontend (UI + logic)
└── README.md        # Project documentation

Author

Ndunge Mutheu Mbithi
African Leadership University


