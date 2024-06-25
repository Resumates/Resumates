const mongoose = require('mongoose');

const resumesSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    image: String,
    birth: { type: Date, require: true },
    gender: { type: String, require: true },
    phone: { type: String, require: true },
    email: { type: String, require: true },
    Stuctrue: {
      sections: [
        { name: 'experience', type: [{ type: String }] },
        { name: 'education', type: { type: String } },
      ],

      title: String,
      template_type: String,
      user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

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
        Activity: [
          {
            Category: String,
            Organization: String,
            duration: String,
            desc: String,
          },
        ],
        Certificate: [
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