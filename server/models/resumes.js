const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resumesSchema = new mongoose.Schema(
  {
    // _id: { type: Schema.Types.ObjectId, require: true },
    //user_id: { type: Schema.Types.ObjectId, ref: 'User', require: true },
    userId: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String },
    birth: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    structure: {
      title: String,
      template_type: { type: String, required: true },

      content: {
        workExperience: [
          {
            company: String,
            department: String,
            position: String,
            salary: String,
            startDate: String,
            endDate: String,
            workStatus: String,
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
        qualification: [
          {
            awardDate: String,
            awardName: String,
            category: String,
            certificateName: String,
            certification: String,
            getDate: String,
            getyear: String,
            issuer: String,
            language: String,
            languageTest: String,
            level: String,
            organization: String,
            score: String,
            testName: String,
            wards: String,
          },
        ],
        portfolio: Array,
      },
    },
  },
  { timestamps: true, collection: 'resumes' },
);

const Resumes = mongoose.model('Resumes', resumesSchema);
module.exports = { Resumes };
