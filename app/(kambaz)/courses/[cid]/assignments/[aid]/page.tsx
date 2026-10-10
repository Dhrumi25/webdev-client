import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;

  return (
    <div id="wd-assignments-editor">

      <div className="mb-6">
        <label htmlFor="wd-name" className="block mb-2 font-medium">
          Assignment Name
        </label>
        <input
          id="wd-name"
          defaultValue="A1 - ENV + HTML"
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="wd-description" className="block mb-2 font-medium">
          Description
        </label>
        <textarea
          id="wd-description"
          rows={5}
          defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Vercel."
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="wd-points" className="block mb-2 font-medium">
          Points
        </label>
        <input
          id="wd-points"
          defaultValue={100}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="wd-group" className="block mb-2 font-medium">
          Assignment Group
        </label>
        <select
          id="wd-group"
          className="w-full border border-gray-300 rounded px-3 py-2"
        >
          <option>ASSIGNMENTS</option>
          <option>QUIZZES</option>
          <option>EXAMS</option>
          <option>PROJECT</option>
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="wd-display-grade-as" className="block mb-2 font-medium">
          Display Grade as
        </label>
        <select
          id="wd-display-grade-as"
          className="w-full border border-gray-300 rounded px-3 py-2"
        >
          <option>Percentage</option>
          <option>Points</option>
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="wd-submission-type" className="block mb-2 font-medium">
          Submission Type
        </label>
        <select
          id="wd-submission-type"
          className="w-full border border-gray-300 rounded px-3 py-2"
        >
          <option>Online</option>
        </select>
      </div>

      <div className="mb-6">
        <div className="mb-3 font-medium">Online Entry Options</div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="wd-text-entry" />
          <label htmlFor="wd-text-entry">Text Entry</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="wd-website-url" />
          <label htmlFor="wd-website-url">Website URL</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="wd-media-recordings" />
          <label htmlFor="wd-media-recordings">Media Recordings</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="wd-student-annotation" />
          <label htmlFor="wd-student-annotation">Student Annotation</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="wd-file-upload" />
          <label htmlFor="wd-file-upload">File Upload</label>
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="wd-assign-to" className="block mb-2 font-medium">
          Assign To
        </label>
        <input
          id="wd-assign-to"
          defaultValue="Everyone"
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="wd-due-date" className="block mb-2 font-medium">
          Due
        </label>
        <input
          type="date"
          id="wd-due-date"
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="wd-available-from" className="block mb-2 font-medium">
          Available From
        </label>
        <input
          type="date"
          id="wd-available-from"
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="wd-available-until" className="block mb-2 font-medium">
          Until
        </label>
        <input
          type="date"
          id="wd-available-until"
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="wd-ai-editor-notes" className="block mb-2 font-medium">
          Sample notes
        </label>
        <textarea
          id="wd-ai-editor-notes"
          rows={3}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div className="flex gap-3">
        <Link
          id="wd-cancel"
          href={`/courses/${cid}/assignments`}
          className="border border-gray-300 rounded px-5 py-2 hover:bg-gray-100"
        >
          Cancel
        </Link>
        <Link
          id="wd-save"
          href={`/courses/${cid}/assignments`}
          className="bg-red-600 text-white rounded px-5 py-2 hover:bg-red-700"
        >
          Save
        </Link>
      </div>

    </div>
  );
}