import mongoose from "mongoose";

const NotificationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  message: { type: String, required: true }, 
  appointmentId: { type: mongoose.Types.ObjectId, ref: 'Appointment', required: true },
  isRead: { type: Boolean, default: false }, 
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Notification", NotificationSchema);
