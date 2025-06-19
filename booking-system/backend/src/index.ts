import express from "express";
import bookingsRoute from "./routes/bookings";
import cors from "cors";

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.use("/api/bookings", bookingsRoute);

app.listen(4000, () => {
  console.log("Backend running on http://localhost:4000");
});
