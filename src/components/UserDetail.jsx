import React from "react";

const UserDetail = ({ user }) => {
  const details = [
    { label: "Phone", value: user.phone },
    {
      label: "Address",
      value: `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}`,
    },
    { label: "Age", value: user.dob.age },
    { label: "Nationality", value: user.nat },
    { label: "Timezone", value: user.location.timezone.description },
  ];

  return (
    <div className="mt-6 px-6">
      <ul className="space-y-4">
        {details.map((detail, index) => (
          <li
            key={index}
            className="flex justify-between text-sm md:text-base text-gray-700"
          >
            <span className="font-semibold">{detail.label}:</span>
            <span>{detail.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDetail;
