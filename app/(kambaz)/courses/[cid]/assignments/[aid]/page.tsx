import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;

  return (
    <div id="wd-assignments-editor">

      <label htmlFor="wd-name">
        Assignment Name
      </label>

      <br />

      <input
        id="wd-name"
        defaultValue="A1 - ENV + HTML"
      />

      <br />
      <br />

      <textarea
        id="wd-description"
        rows={5}
        cols={50}
        defaultValue="The assignment is available online."
      />

      <br />
      <br />

      <table>
        <tbody>

          <tr>
            <td align="right">
              <label htmlFor="wd-points">
                Points
              </label>
            </td>

            <td>
              <input
                id="wd-points"
                defaultValue={100}
              />
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-group">
                Assignment Group
              </label>
            </td>

            <td>
              <select id="wd-group">
                <option>ASSIGNMENTS</option>
                <option>QUIZZES</option>
                <option>EXAMS</option>
                <option>PROJECT</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-display-grade-as">
                Display Grade as
              </label>
            </td>

            <td>
              <select id="wd-display-grade-as">
                <option>Percentage</option>
                <option>Points</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-submission-type">
                Submission Type
              </label>
            </td>

            <td>
              <select id="wd-submission-type">
                <option>Online</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right">
              Online Entry Options
            </td>

            <td>
              <input
                type="checkbox"
                id="wd-text-entry"
              />
              <label htmlFor="wd-text-entry">
                Text Entry
              </label>

              <br />

              <input
                type="checkbox"
                id="wd-website-url"
              />
              <label htmlFor="wd-website-url">
                Website URL
              </label>

              <br />

              <input
                type="checkbox"
                id="wd-media-recordings"
              />
              <label htmlFor="wd-media-recordings">
                Media Recordings
              </label>

              <br />

              <input
                type="checkbox"
                id="wd-student-annotation"
              />
              <label htmlFor="wd-student-annotation">
                Student Annotation
              </label>

              <br />

              <input
                type="checkbox"
                id="wd-file-upload"
              />
              <label htmlFor="wd-file-upload">
                File Upload
              </label>
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-assign-to">
                Assign To
              </label>
            </td>

            <td>
              <input
                id="wd-assign-to"
                defaultValue="Everyone"
              />
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-due-date">
                Due
              </label>
            </td>

            <td>
              <input
                type="date"
                id="wd-due-date"
              />
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-available-from">
                Available From
              </label>
            </td>

            <td>
              <input
                type="date"
                id="wd-available-from"
              />
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-available-until">
                Until
              </label>
            </td>

            <td>
              <input
                type="date"
                id="wd-available-until"
              />
            </td>
          </tr>

        </tbody>
      </table>

      <br />

      <Link id="wd-cancel" href={`/courses/${cid}/assignments`}>
        Cancel
      </Link>

      {" | "}

      <Link id="wd-save" href={`/courses/${cid}/assignments`}>
        Save
      </Link>

    </div>
  );
}