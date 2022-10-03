const express = require("express");

const router = express.Router();

const jobController = require("../controllers/job");
const Auth = require("../Authentication/is-auth");

// to get all jobs
router.get("/jobs/all", jobController.getAllJobs);

// to get jobs category wise
router.get("/jobs/:category", jobController.getJobsByCategory);

// to apply to a job
router.get("/jobs/apply/:jobid", Auth.authentication, jobController.applyToJob);

// to create a new job
router.post(
  "jobs/create/:teacherid",
  Auth.authentication,
  jobController.createJob
);

module.exports = router;
