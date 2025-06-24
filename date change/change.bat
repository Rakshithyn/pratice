const { exec } = require("child_process");

// 🔁 Set your desired date here in MM-DD-YY format
const newDate = "06-24-25"; // 24 June 2025

exec(`date ${newDate}`, (error, stdout, stderr) => {
  if (error) {
    console.error("❌ Error setting date:", error.message);
    return;
  }
  if (stderr) {
    console.error("⚠️ stderr:", stderr);
    return;
  }
  console.log("✅ Date changed successfully:\n", stdout);
});
