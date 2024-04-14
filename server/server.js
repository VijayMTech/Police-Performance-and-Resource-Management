const express = require('express');
const admin = require('firebase-admin');
const cors = require('cors');
const bodyParser = require('body-parser');


//import serviceAccount from './serviceAccountKey.json'; // Update path to your service account key

const serviceAccount = require('E:/KSP Datathon 2024/Prototype Phase (LEVEL 2)/policeperformance/auth/privatekeys/roleauth3-firebase-adminsdk-u81pf-242abd53f0.json');
const app = express();
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true // Set this if you are sending cookies or authentication headers
}));

app.use(bodyParser.json());
app.use(express.json());

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://roleauth3-default-rtdb.firebaseio.com/'
});

async function authenticateUser(userId, password) {
  try {
    // Get a reference to your Firebase Realtime Database
    const db = admin.database();
    const usersRef = db.ref('users');
    // Check if the user exists in the database
    const snapshot = await usersRef.child(userId).get();
    if (snapshot.exists()) {
      // Compare the provided password with the password stored in the database
      const userData = snapshot.val();
      if (userData.password === password) {
        return true; // Authentication successful
      }
    }
    return false; // Authentication failed
  } catch (error) {
    console.error('Error authenticating user:', error);
    return false; // Authentication failed due to error
  }
}

// Function to generate a custom token
async function generateCustomToken(userId) {
  try {
    const customToken = await admin.auth().createCustomToken(userId);
    return customToken;
  } catch (error) {
    console.error('Error generating custom token:', error);
    throw error;
  }
}

// Define login route
app.post('/login', async (req, res) => {
  console.log("login done")
  const { userId, password } = req.body;
  try {
    // Check user credentials against your database
    const userExists = await authenticateUser(userId, password);
    console.log(userExists);
    if (userExists) {
      // Generate a custom token for the authenticated user
      const customToken = await generateCustomToken(userId);
      res.status(200).json({ token: customToken });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error authenticating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
