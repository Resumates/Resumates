const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resumesSchema = new mongoose.Schema(
  {
    // _id: { type: Schema.Types.ObjectId, require: true },
    name: { type: String, require: true },
    image: { type: String, default: '' },
    birth: { type: Date, require: true },
    gender: { type: String, enum: ['M', 'F'], require: true },
    phone: { type: String, require: true },
    email: { type: String, require: true },
    structure: {
      title: String,
      template_type: String,
      // user_id: { type: Schema.Types.ObjectId, ref: 'User' },
      content: {
        work_experience: [
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
            Category: String,
            Organization: String,
            duration: String,
            desc: String,
          },
        ],
        certificate: [
          {
            category: String,
            subject: String,
            Organization: String,
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
  { timestamps: true, collation: 'resumes' },
);

const Resumes = mongoose.model('Resumes', resumesSchema);
module.exports = { Resumes };
