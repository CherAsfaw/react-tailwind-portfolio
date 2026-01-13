const dbConnection = require("../config/db.config");
const { StatusCodes } = require("http-status-codes");

async function sendMessage(req, res) {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ success: false, error: "All fields are required" });
  }

  try {
    const [result] = await dbConnection.query(
      `INSERT INTO customer_messages (name, email, phone, message)
       VALUES (?, ?, ?, ?)`,
      [name, email, phone, message]
    );
      console.log("Message send successfully");
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Message send successfully",
      insertId: result.insertId,
    });
  } catch (error) {
    console.error("DB insert error:", error.message);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ success: false, error: "Something went wrong" });
  }
}

module.exports = { sendMessage };
