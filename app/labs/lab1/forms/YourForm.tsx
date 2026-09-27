"use client";

export default function YourForm() {
  return (
    <form
      id="wd-your-form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <h4>Student Profile</h4>

      <h5>About You</h5>
      <label htmlFor="wd-your-form-first-name">First name:</label>
      <input
        type="text"
        placeholder="Dhrumi"
        defaultValue="Dhrumi"
        id="wd-your-form-first-name"
      />
      <br />
      <label htmlFor="wd-your-form-last-name">Last name:</label>
      <input
        type="text"
        placeholder="Patel"
        defaultValue="Patel"
        id="wd-your-form-last-name"
      />
      <br />
      <label htmlFor="wd-your-form-student-id">Student ID:</label>
      <input
        type="password"
        placeholder="12345678"
        defaultValue="12345678"
        id="wd-your-form-student-id"
      />
      <br />

      <h5>Bio</h5>
      <label htmlFor="wd-your-form-bio">
        Why are you taking this course?
      </label>
      <br />
      <textarea
        id="wd-your-form-bio"
        cols={40}
        rows={5}
        defaultValue="I'm a Master's student in Computer Science at Northeastern University, originally from India. I'm taking this course to build strong full-stack web development skills and to design and deploye real applications on my own."
      />
      <br />

      <h5>Class Standing</h5>
      <input type="radio" name="class-standing" id="wd-your-form-freshman" />
      <label htmlFor="wd-your-form-freshman">Freshman</label>
      <br />
      <input type="radio" name="class-standing" id="wd-your-form-sophomore" />
      <label htmlFor="wd-your-form-sophomore">Sophomore</label>
      <br />
      <input type="radio" name="class-standing" id="wd-your-form-junior" />
      <label htmlFor="wd-your-form-junior">Junior</label>
      <br />
      <input type="radio" name="class-standing" id="wd-your-form-senior" />
      <label htmlFor="wd-your-form-senior">Senior</label>
      <br />
      <input
        type="radio"
        name="class-standing"
        id="wd-your-form-graduate"
        defaultChecked
      />
      <label htmlFor="wd-your-form-graduate">Graduate</label>
      <br />

      <h5>Enrollment</h5>
      <input
        type="radio"
        name="enrollment-type"
        id="wd-your-form-full-time"
        defaultChecked
      />
      <label htmlFor="wd-your-form-full-time">Full-time</label>
      <br />
      <input type="radio" name="enrollment-type" id="wd-your-form-part-time" />
      <label htmlFor="wd-your-form-part-time">Part-time</label>
      <br />

      <h5>Interests</h5>
      <input
        type="checkbox"
        name="interests"
        id="wd-your-form-interest-webdev"
        defaultChecked
      />
      <label htmlFor="wd-your-form-interest-webdev">Web Development</label>
      <br />
      <input
        type="checkbox"
        name="interests"
        id="wd-your-form-interest-cloud"
        defaultChecked
      />
      <label htmlFor="wd-your-form-interest-cloud">Cloud Computing</label>
      <br />
      <input
        type="checkbox"
        name="interests"
        id="wd-your-form-interest-ai"
      />
      <label htmlFor="wd-your-form-interest-ai">Artificial Intelligence</label>
      <br />
      <input
        type="checkbox"
        name="interests"
        id="wd-your-form-interest-data"
      />
      <label htmlFor="wd-your-form-interest-data">Data Science</label>
      <br />

      <h5>Academics</h5>
      <label htmlFor="wd-your-form-major">Major: </label>
      <br />
      <select id="wd-your-form-major" defaultValue="CS">
        <option value="CS">Computer Science</option>
        <option value="IT">Information Technology</option>
        <option value="DS">Data Science</option>
        <option value="OTHER">Other</option>
      </select>
      <br />
      <label htmlFor="wd-your-form-topics">
        Topics to deepen this term:{" "}
      </label>
      <br />
      <select
        multiple
        id="wd-your-form-topics"
        defaultValue={["REACT", "NEXTJS"]}
      >
        <option value="REACT">React</option>
        <option value="NEXTJS">Next.js</option>
        <option value="NODE">Node.js</option>
        <option value="MONGODB">MongoDB</option>
        <option value="TYPESCRIPT">TypeScript</option>
      </select>
      <br />

      <h5>Other Details</h5>
      <label htmlFor="wd-your-form-email">School email: </label>
      <input
        type="email"
        placeholder="patel.dhrumia@northeastern.edu"
        defaultValue="patel.dhrumia@northeastern.edu"
        id="wd-your-form-email"
      />
      <br />
      <label htmlFor="wd-your-form-grad-year">
        Expected graduation year:{" "}
      </label>
      <input
        type="number"
        defaultValue="2027"
        min={2026}
        max={2032}
        id="wd-your-form-grad-year"
      />
      <br />
      <label htmlFor="wd-your-form-dob">Date of birth: </label>
      <input
        type="date"
        defaultValue="2003-02-25"
        id="wd-your-form-dob"
      />
      <br />
      <label htmlFor="wd-your-form-excitement">
        How excited are you about this course (0-10)?{" "}
      </label>
      <input
        type="range"
        defaultValue="10"
        min="0"
        max="10"
        id="wd-your-form-excitement"
      />
      <br />

      <button id="wd-your-form-save" type="submit">
        Save
      </button>
      <button id="wd-your-form-cancel" type="button">
        Cancel
      </button>
    </form>
  );
}