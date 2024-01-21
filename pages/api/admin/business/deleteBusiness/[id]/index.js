import ConnectDB from "../../../../../../DB/connectDB";
import Business from "../../../../../../models/td_business_total";
const { parse } = require('url');

export default async (req, res) => {
  await ConnectDB();
  const { id } = req.query;

  try {
    const deletedBusiness = await Business.findByIdAndDelete(id);

    if (!deletedBusiness) {
      return res.status(404).json({ message: 'Business not found' });
    }

    res.json({ success: true, message: 'Business deleted successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

};
