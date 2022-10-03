const Job = require("../model/jobs");
const User = require("../model/user");

exports.getAllJobs = (req, res, next) => {
  Job.find()
    .then((jobs) => {
      // console.log(course)
      res.status(200).json({ job: jobs });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getJobsByCategory = (req, res) => {
  const category = req.params.category;

  if (category == "all" || category == "") {
    Job.find()
      .then((job) => {
        res.status(200).json({ job: job });
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({ message: "Error Occured" });
      });
  } else {
    Job.find({ category: category })
      .then((jobs) => {
        //console.log(courses);
        res.status(200).json({ job: jobs });
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

exports.applyToJob = (req, res, next) => {
  const jobId = req.params.jobid;
  const userId = req.body._userID;

  User.findById({ _id: userId })
    .then((user) => {
      if (!user.jobs.include(jobId)) {
        user.jobs.push(jobId);
        console.log("Applied to the job");
      } else {
        console.log("Already applied to the job");
      }
      user.save().then(() => {
        Job.findById({ _id: jobId })
          .then((job) => {
            if (!job.application.includes(userId)) {
              job.application.push(userId);
              console.log("Applied for the job");
            } else {
              console.log("Already applied to the job");
            }
            job.save().then(() => {
              console.log("Job Application successfull");
              res
                .status(200)
                .json({ message: "Successfully applied for the job" });
            });
            console.log(user);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    })
    .catch((err) => {
      console.log("Job application failed");
    });
};

exports.createJob = (req, res) => {
  const { title, description, salary, skills, company, category } = req.body;
  const job = new Job({
    title: title,
    description: description,
    salary: salary,
    skills: skills,
    company: company,
    category: category,
  });

  job
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json({ message: "Job is created successfully" });
    })
    .catch((err) => {
      console.log(err);
    });
};
