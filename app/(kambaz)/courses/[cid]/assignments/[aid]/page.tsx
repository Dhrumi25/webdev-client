"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  useAssignmentsStore,
  emptyAssignment,
  type Assignment,
} from "../../../../store/assignmentsStore";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const assignments = useAssignmentsStore((state) => state.assignments);
  const addAssignment = useAssignmentsStore((state) => state.addAssignment);
  const updateAssignment = useAssignmentsStore((state) => state.updateAssignment);
  const isNew = aid === "new";
  const existing = assignments.find((a) => a._id === aid);

  const [assignment, setAssignment] = useState<Assignment>(
    existing ?? { ...emptyAssignment, course: String(cid) },
  );

  useEffect(() => {
    if (existing) setAssignment(existing);
  }, [existing]);

  const save = () => {
    if (isNew) {
      addAssignment({ ...assignment, course: String(cid) });
    } else {
      updateAssignment(assignment);
    }
    router.push(`/courses/${cid}/assignments`);
  };

  const cancel = () => {
    router.push(`/courses/${cid}/assignments`);
  };

  return (
    <div id="wd-assignments-editor">
      <div className="mb-6">
        <label htmlFor="wd-name" className="block mb-2 font-medium">
          Assignment Name
        </label>
        <input
          id="wd-name"
          className="w-full border border-gray-300 rounded px-3 py-2"
          value={assignment.title}
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="wd-description" className="block mb-2 font-medium">
          Description
        </label>
        <textarea
          id="wd-description"
          rows={5}
          className="w-full border border-gray-300 rounded px-3 py-2"
          value={assignment.description}
          onChange={(e) =>
            setAssignment({ ...assignment, description: e.target.value })
          }
        />
      </div>
      <div className="mb-6">
        <label htmlFor="wd-points" className="block mb-2 font-medium">
          Points
        </label>
        <input
          id="wd-points"
          type="number"
          className="w-full border border-gray-300 rounded px-3 py-2"
          value={assignment.points}
          onChange={(e) =>
            setAssignment({ ...assignment, points: parseInt(e.target.value) || 0 })
          }
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
          value={assignment.due}
          onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
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
          value={assignment.available}
          onChange={(e) =>
            setAssignment({ ...assignment, available: e.target.value })
          }
        />
      </div>
      <div className="mb-6">
        <label htmlFor="wd-available-until" className="block mb-2 font-medium">
          Available Until
        </label>
        <input
          type="date"
          id="wd-available-until"
          className="w-full border border-gray-300 rounded px-3 py-2"
          value={assignment.availableUntil ?? ""}
          onChange={(e) =>
            setAssignment({ ...assignment, availableUntil: e.target.value })
          }
        />
      </div>
      <div className="flex gap-3">
        <button
          type="button"
          id="wd-cancel"
          onClick={cancel}
          className="border border-gray-300 rounded px-5 py-2 hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          type="button"
          id="wd-save"
          onClick={save}
          className="bg-red-600 text-white rounded px-5 py-2 hover:bg-red-700"
        >
          Save
        </button>
      </div>
    </div>
  );
}