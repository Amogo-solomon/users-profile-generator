import React from "react";

const UserDetailTable = ({ user }) => {
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
      <table className="table-auto w-full text-left text-sm md:text-base">
        <tbody>
          {details.map((detail, index) => (
            <tr
              key={index}
              className="border-b border-gray-300 dark:border-gray-700"
            >
              <td className="font-semibold py-2">{detail.label}:</td>
              <td className="py-2">{detail.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDetailTable;
