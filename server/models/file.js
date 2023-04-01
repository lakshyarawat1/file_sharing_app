import mongoose from "mongoose";

const fileSchema = mongoose.Schema({
  path: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  downloadContent: {
    type: Number,
    required: true,
    default: 0,
  },
});

const File = mongoose.model("File", fileSchema);

export default File;
