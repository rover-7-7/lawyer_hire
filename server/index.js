const express = require("express");
const app = express();
const port = 8001;
app.use(express.json());
let database = {
  law: [
    {
      name: "Rohit",
      id: 12,
      specialisation: "crime specialist",
      experience: 5,
      court: "high court Patna",
    },
    {
      name: "Sara",
      id: 25,
      specialisation: "family law",
      experience: 8,
      court: "district court Miami",
    },
    {
      name: "Michael",
      id: 37,
      specialisation: "corporate law",
      experience: 10,
      court: "Supreme Court New York",
    },
    {
      name: "Emily",
      id: 42,
      specialisation: "intellectual property",
      experience: 7,
      court: "Federal Court Silicon Valley",
    },
    {
      name: "David",
      id: 51,
      specialisation: "real estate law",
      experience: 12,
      court: "County Court London",
    },
    {
      name: "Sophia",
      id: 64,
      specialisation: "employment law",
      experience: 9,
      court: "Labour Court Sydney",
    },
    {
      name: "Adam",
      id: 73,
      specialisation: "immigration law",
      experience: 6,
      court: "Immigration Court Los Angeles",
    },
    {
      name: "Olivia",
      id: 88,
      specialisation: "tax law",
      experience: 11,
      court: "Tax Court Chicago",
    },
    {
      name: "James",
      id: 91,
      specialisation: "environmental law",
      experience: 15,
      court: "Environmental Court Paris",
    },
    {
      name: "Isabella",
      id: 107,
      specialisation: "civil rights law",
      experience: 8,
      court: "Civil Court Johannesburg",
    },
    {
      name: "Ethan",
      id: 112,
      specialisation: "healthcare law",
      experience: 9,
      court: "Health Court Berlin",
    },
    {
      name: "Ava",
      id: 125,
      specialisation: "entertainment law",
      experience: 7,
      court: "Entertainment Court Los Angeles",
    },
    {
      name: "Alexander",
      id: 131,
      specialisation: "sports law",
      experience: 10,
      court: "Sports Court Melbourne",
    },
    {
      name: "Mia",
      id: 144,
      specialisation: "technology law",
      experience: 6,
      court: "Technology Court Seoul",
    },
    {
      name: "William",
      id: 152,
      specialisation: "banking law",
      experience: 13,
      court: "Banking Court Zurich",
    },
    {
      name: "Charlotte",
      id: 165,
      specialisation: "international law",
      experience: 11,
      court: "International Court The Hague",
    },
    {
      name: "Henry",
      id: 171,
      specialisation: "human rights law",
      experience: 8,
      court: "Human Rights Court Geneva",
    },
    {
      name: "Amelia",
      id: 183,
      specialisation: "cybersecurity law",
      experience: 10,
      court: "Cybersecurity Court Washington D.C.",
    },
    {
      name: "Daniel",
      id: 196,
      specialisation: "disability law",
      experience: 7,
      court: "Disability Court Ottawa",
    },
    {
      name: "Harper",
      id: 203,
      specialisation: "elder law",
      experience: 12,
      court: "Elder Court Melbourne",
    },
  ],
};

//  MAIN WINDOW
app.get("/main", (req, res) => {
  res.send("INSIDE_MAIN_WINDOW");
});

// ROUTE 1 : LAWYER-LOGIN
app.get("/main/:name", (req, res) => {
  res.send("lawyer_login");
});

// ROUTE 2 : LAWYER-SIGNUP
app.get("/main/lawyer_signup", (req, res) => {
  res.send("lawyer_signup");
});

// ROUTE 3 : USER-SIGNUP
app.get("/main/user_signup", (req, res) => {
  res.send("user_signup");
});

// ROUTE 4 : USER-SIGNIN
app.get("/main/user_login", (req, res) => {
  res.send("user_login");
});

// ROUTE 5 : HOME-PAGE
app.get("/main/lawyer_login/home", (req, res) => {
  res.send("home");
});
// ROUTE 5 : HOME-PAGE
app.get("/main/lawyer_signup/home", (req, res) => {
  res.send("home");
});

// ROUTE PAYMENT PAGE
app.get("/main/user_signup/home/payment", (req, res) => {
  res.send("Payment_Page");
});

// ROUTE EXIT PAGE
app.get("/main/user_signup/home/exit", (req, res) => {
  res.send("EXIT PAGE");
});

// ROUTE 6: UPDATE LAWYER INFORMATION
app.put("/main/lawyer/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Updated lawyer information for id ${id}`);
});

// ROUTE 7: ADD NEW LAWYER
app.post("/main/lawyer", (req, res) => {
  const newLawyer = req.body;
  res.send("Added new lawyer successfully");
});

// ROUTE 8: PARTIAL UPDATE OF LAWYER INFORMATION
app.patch("/main/lawyer/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Partially updated lawyer information for ${id}`);
});

// ROUTE 9: DELETE LAWYER
app.delete("/main/lawyer/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Deleted lawyer with id ${id}`);
});
app.get("/*", (req, res) => {
  res.send("NOT AVAILABLE VISIT OTHER ROUTES");
});

app.listen(port, () => {
  console.log(`Listening on Port Number : ${port} `);
});
