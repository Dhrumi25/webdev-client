"use client";
import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { FaPlus, FaSearch, FaTrash } from "react-icons/fa";
import { useAssignmentsStore } from "../../../store/assignmentsStore";

export default function Assignments() {
  const { cid } = useParams();
  const router = useRouter();
  const assignments = useAssignmentsStore((state) => state.assignments);
  const deleteAssignment = useAssignmentsStore((state) => state.deleteAssignment);
  const [search, setSearch] = useState("");
  const [confirmId, setConfirmId] = useState<string | null>(null);

  const courseAssignments = assignments
    .filter((a) => a.course === cid)
    .filter((a) => a.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div id="wd-assignments">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="relative">
          <FaSearch className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-neutral-500" />
          <input
            placeholder="Search for Assignments"
            id="wd-search-assignment"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded border py-1.5 pr-3 pl-9 text-sm"
          />
        </div>
        <div className="flex gap-2">
          <button
            id="wd-add-assignment-group"
            type="button"
            className="inline-flex items-center gap-1 rounded border px-3 py-1.5 text-sm"
          >
            <FaPlus /> Group
          </button>
          <button
            id="wd-add-assignment"
            type="button"
            className="inline-flex items-center gap-1 rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
            onClick={() => router.push(`/courses/${cid}/assignments/new`)}
          >
            <FaPlus /> Assignment
          </button>
        </div>
      </div>
      <h3
        id="wd-assignments-title"
        className="mb-3 flex items-center justify-between rounded bg-neutral-200 p-3 text-lg"
      >
        <span>ASSIGNMENTS 40% of Total</span>
      </h3>
      <ul id="wd-assignment-list" className="m-0 list-none p-0">
        {courseAssignments.map((assignment) => (
          <li
            key={assignment._id}
            className="wd-assignment-list-item mb-3 flex items-center justify-between gap-3 border border-neutral-300 border-l-[3px] border-l-green-600 bg-white p-3"
          >
            <Link
              href={`/courses/${cid}/assignments/${assignment._id}`}
              className="wd-assignment-link font-semibold text-neutral-900 no-underline"
            >
              {assignment.title}
            </Link>
            <button
              type="button"
              id={`wd-delete-assignment-${assignment._id}-click`}
              className="rounded bg-red-600 px-2 py-1 text-sm text-white"
              onClick={() => setConfirmId(assignment._id)}
            >
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
      {confirmId && (
        <div
          id="wd-delete-assignment-dialog"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
        >
          <div className="w-full max-w-sm rounded-lg bg-white p-4 shadow-lg">
            <p>Are you sure you want to remove this assignment?</p>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                id="wd-delete-assignment-cancel"
                className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
                onClick={() => setConfirmId(null)}
              >
                No
              </button>
              <button
                type="button"
                id="wd-delete-assignment-confirm"
                className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
                onClick={() => {
                  deleteAssignment(confirmId);
                  setConfirmId(null);
                }}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}