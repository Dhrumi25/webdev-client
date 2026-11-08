"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAccountContext, type User } from "../AccountContext";

export default function Profile() {
  const [profile, setProfile] = useState<User | null>(null);
  const { currentUser, setCurrentUser } = useAccountContext();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push("/account/signin");
      return;
    }
    setProfile(currentUser);
  }, [currentUser, router]);

  const signout = () => {
    setCurrentUser(null);
    router.push("/account/signin");
  };

  if (!profile) return null;

  return (
    <div id="wd-profile-screen" className="max-w-sm">
      <h3>Profile</h3>
      <input
        id="wd-username"
        className="mb-2 block w-full rounded border border-neutral-300 px-3 py-1.5"
        value={profile.username}
        onChange={(e) => setProfile({ ...profile, username: e.target.value })}
      />
      <input
        id="wd-password"
        type="password"
        className="mb-2 block w-full rounded border border-neutral-300 px-3 py-1.5"
        value={profile.password}
        onChange={(e) => setProfile({ ...profile, password: e.target.value })}
      />
      <input
        id="wd-firstname"
        placeholder="First Name"
        className="mb-2 block w-full rounded border border-neutral-300 px-3 py-1.5"
        value={profile.firstName}
        onChange={(e) =>
          setProfile({ ...profile, firstName: e.target.value })
        }
      />
      <input
        id="wd-lastname"
        placeholder="Last Name"
        className="mb-2 block w-full rounded border border-neutral-300 px-3 py-1.5"
        value={profile.lastName}
        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
      />
      <input
        id="wd-email"
        type="email"
        placeholder="Email"
        className="mb-2 block w-full rounded border border-neutral-300 px-3 py-1.5"
        value={profile.email}
        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
      />
      <select
        id="wd-role"
        className="mb-3 block w-full rounded border border-neutral-300 px-3 py-1.5"
        value={profile.role}
        onChange={(e) => setProfile({ ...profile, role: e.target.value })}
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <button
        type="button"
        onClick={signout}
        id="wd-signout-btn"
        className="rounded bg-blue-600 px-4 py-1.5 text-white"
      >
        Sign out
      </button>
    </div>
  );
}