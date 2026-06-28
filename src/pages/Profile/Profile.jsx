import { useEffect, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import axios from "axios";

import DashboardLayout from "../../layouts/DashboardLayout";

function Profile() {

  const [profile, setProfile] = useState({

    fullname: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    address: "",

  });

  const [loading, setLoading] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
const [showNewPassword, setShowNewPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Fetch Profile

  const fetchProfile = async () => {

    try {

      const token = localStorage.getItem("token");

      const res = await axios.get(

        "https://lifetrack-e2sm.onrender.com/api/profile",

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }

      );

      setProfile({

        fullname: res.data.fullname,
        email: res.data.email,
        phone: res.data.phone || "",
        dob: res.data.dob
          ? res.data.dob.substring(0, 10)
          : "",
        gender: res.data.gender || "",
        address: res.data.address || "",

      });

    } catch (err) {

      console.log(err);

    }

  };

  useEffect(() => {

    fetchProfile();

  }, []);

  const handleChange = (e) => {

    setProfile({

      ...profile,

      [e.target.name]: e.target.value,

    });

  };
    // Save Profile
  const saveProfile = async () => {

    try {

      setLoading(true);

      const token = localStorage.getItem("token");

      const res = await axios.put(

        "https://lifetrack-e2sm.onrender.com/api/profile",

        {
          fullname: profile.fullname,
          phone: profile.phone,
          dob: profile.dob,
          gender: profile.gender,
          address: profile.address,
        },

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }

      );

      // Update localStorage so Navbar, Sidebar and Greeting
      // immediately show the updated name

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("Profile updated successfully!");

      fetchProfile();

    } catch (err) {

      console.log(err);

      alert(
        err.response?.data?.message ||
        "Unable to update profile"
      );

    } finally {

      setLoading(false);

    }

  };
  // Change Password State
  const [password, setPassword] = useState({

    currentPassword: "",
    newPassword: "",
    confirmPassword: "",

  });

  const handlePasswordChange = (e) => {

    setPassword({

      ...password,

      [e.target.name]: e.target.value,

    });

  };
  // Change Password
  const changePassword = async () => {

    if (
      !password.currentPassword ||
      !password.newPassword ||
      !password.confirmPassword
    ) {

      alert("Please fill all password fields.");

      return;

    }

    if (
      password.newPassword !==
      password.confirmPassword
    ) {

      alert("New passwords do not match.");

      return;

    }

    try {

      setLoading(true);

      const token = localStorage.getItem("token");

      await axios.put(

        "https://lifetrack-e2sm.onrender.com/api/profile/password",

        password,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }

      );

      alert("Password changed successfully!");

      setPassword({

        currentPassword: "",
        newPassword: "",
        confirmPassword: "",

      });

    } catch (err) {

      console.log(err);

      alert(
        err.response?.data?.message ||
        "Unable to change password."
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <DashboardLayout>

      <h1 className="text-4xl font-bold mb-8">
        My Profile
      </h1>
            {/*Personal Information*/}

      <div className="bg-white rounded-2xl shadow-lg p-8">

        <h2 className="text-2xl font-bold mb-8">
          Personal Information
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Full Name */}

          <div>

            <label className="font-semibold">
              Full Name
            </label>

            <input
              type="text"
              name="fullname"
              value={profile.fullname}
              onChange={handleChange}
              className="border rounded-xl p-3 w-full mt-2"
            />

          </div>

          {/* Email */}

          <div>

            <label className="font-semibold">
              Email Address
            </label>

            <input
              type="email"
              value={profile.email}
              readOnly
              className="border rounded-xl p-3 w-full mt-2 bg-gray-100 cursor-not-allowed"
            />

          </div>

          {/* Phone */}

          <div>

            <label className="font-semibold">
              Phone Number
            </label>

            <input
              type="text"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="border rounded-xl p-3 w-full mt-2"
            />

          </div>

          {/* Date of Birth */}

          <div>

            <label className="font-semibold">
              Date of Birth
            </label>

            <input
              type="date"
              name="dob"
              value={profile.dob}
              onChange={handleChange}
              className="border rounded-xl p-3 w-full mt-2"
            />

          </div>

          {/* Gender */}

          <div>

            <label className="font-semibold">
              Gender
            </label>

            <select
              name="gender"
              value={profile.gender}
              onChange={handleChange}
              className="border rounded-xl p-3 w-full mt-2"
            >

              <option value="">
                Select Gender
              </option>

              <option value="Male">
                Male
              </option>

              <option value="Female">
                Female
              </option>

              <option value="Other">
                Other
              </option>

            </select>

          </div>

          {/* Address */}

          <div className="md:col-span-2">

            <label className="font-semibold">
              Address
            </label>

            <textarea
              rows="4"
              name="address"
              value={profile.address}
              onChange={handleChange}
              placeholder="Enter your address"
              className="border rounded-xl p-3 w-full mt-2 resize-none"
            />

          </div>

        </div>

        <div className="flex justify-end mt-8">

          <button
            onClick={saveProfile}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold"
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>

        </div>

      </div>
            {/*Change Password*/}

      <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">

        <h2 className="text-2xl font-bold mb-8">
          Change Password
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="md:col-span-2">

            <label className="font-semibold">
              Current Password
            </label>

            <div className="relative">

  <input
    type={showCurrentPassword ? "text" : "password"}
    name="currentPassword"
    value={password.currentPassword}
    onChange={handlePasswordChange}
    placeholder="Enter current password"
    className="border rounded-xl p-3 pr-12 w-full mt-2"
  />

  <button
    type="button"
    onClick={() =>
      setShowCurrentPassword(!showCurrentPassword)
    }
    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600"
  >

    {showCurrentPassword ? (
      <FiEyeOff size={20} />
    ) : (
      <FiEye size={20} />
    )}

  </button>

</div>
          </div>

          <div>

            <label className="font-semibold">
              New Password
            </label>

            <div className="relative">

  <input
    type={showNewPassword ? "text" : "password"}
    name="newPassword"
    value={password.newPassword}
    onChange={handlePasswordChange}
    placeholder="Enter new password"
    className="border rounded-xl p-3 pr-12 w-full mt-2"
  />

  <button
    type="button"
    onClick={() =>
      setShowNewPassword(!showNewPassword)
    }
    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600"
  >

    {showNewPassword ? (
      <FiEyeOff size={20} />
    ) : (
      <FiEye size={20} />
    )}

  </button>

</div>

          </div>

          <div>

            <label className="font-semibold">
              Confirm Password
            </label>

           <div className="relative">

  <input
    type={showConfirmPassword ? "text" : "password"}
    name="confirmPassword"
    value={password.confirmPassword}
    onChange={handlePasswordChange}
    placeholder="Confirm new password"
    className="border rounded-xl p-3 pr-12 w-full mt-2"
  />

  <button
    type="button"
    onClick={() =>
      setShowConfirmPassword(!showConfirmPassword)
    }
    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600"
  >

    {showConfirmPassword ? (
      <FiEyeOff size={20} />
    ) : (
      <FiEye size={20} />
    )}

  </button>

</div>
          </div>

        </div>

        <div className="flex justify-end mt-8">

          <button
            onClick={changePassword}
            disabled={loading}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold"
          >
            {loading ? "Updating..." : "Change Password"}
          </button>

        </div>

      </div>

    </DashboardLayout>

  );

}

export default Profile;