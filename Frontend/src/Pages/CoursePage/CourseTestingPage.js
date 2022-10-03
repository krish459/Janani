import React from "react";

const CourseTestingPage = () => {
  return (
    <>
    <div className="primary">Skill Test</div>
      <div>
        <p>Philology is the</p>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="q1"
            id="q1_r1"
            value="r2"
          />
          <label class="form-check-label" for="q1_r1">
            study of bones
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="q1"
            id="q1_r2"
            value="r2"
          />
          <label class="form-check-label" for="q1_r2">
            study of muscles
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="q1"
            id="q1_r3"
            value="r3"
          />
          <label class="form-check-label" for="q1_r3">
            study of architecture
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="q1"
            id="q1_r3"
            value="r3"
          />
          <label class="form-check-label" for="q1_r3">
            science of languages
          </label>
        </div>
      </div>
    </>
  );
};

export default CourseTestingPage;
