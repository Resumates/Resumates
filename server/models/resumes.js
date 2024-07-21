const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resumesSchema = new mongoose.Schema(
  {
    // _id: { type: Schema.Types.ObjectId, require: true },
    //user_id: { type: Schema.Types.ObjectId, ref: 'User', require: true },
    userId: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String, default: '' },
    birth: { type: Date, required: true },
    gender: { type: String, enum: ['M', 'F'], required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    structure: {
      title: String,
      template_type: String,

      content: {
        workExperience: [
          {
            company: String,
            department: String,
            position: String,
            salary: String,
            duration: String,
            workStatus: Boolean,
            desc: String,
          },
        ],
        skills: Array,
        activity: [
          {
            category: String,
            organization: String,
            startDate: String,
            endDate: String,
            desc: String,
          },
        ],
        certificate: [
          {
            category: String,
            subject: String,
            organization: String,
            getDate: String,
            rank: String,
            score: String,
            Award: [
              {
                name: String,
                level: String,
              },
            ],
          },
        ],
        portfolio: {
          url: String,
        },
      },
    },
  },
  { timestamps: true, collection: 'resumes' },
);

const Resumes = mongoose.model('Resumes', resumesSchema);
module.exports = { Resumes };
