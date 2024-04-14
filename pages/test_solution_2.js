import axios from "axios";
import { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";

function index() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/users");
        const users = response?.data?.users ?? [];
        const groupedData = {};
        console.log("users", users);
        users.forEach((user) => {
          const {
            department = user?.company?.department,
            gender,
            age,
            hair,
            firstName,
            lastName,
            address,
          } = user;
          // Check if department exists in groupedData, if not create it
          if (!groupedData[department]) {
            groupedData[department] = {
              male: 0,
              female: 0,
              ageRange: "",
              hair: {},
              addressUser: {},
              addressUser_: {},
            };
          }
          // Count gender
          if (gender === "male") {
            groupedData[department].male++;
          } else if (gender === "female") {
            groupedData[department].female++;
          }
          // Calculate age range
          if (!groupedData[department].ageRange) {
            groupedData[department].ageRange = `${age}-${age}`;
          } else {
            const [minAge, maxAge] =
              groupedData[department].ageRange.split("-");
            if (minAge === maxAge && minAge === age) {
              groupedData[department].ageRange = `${age}`;
            } else if (age < minAge) {
              groupedData[department].ageRange = `${age}-${maxAge || age}`;
            } else if (age > maxAge) {
              groupedData[department].ageRange = `${minAge || age}-${age}`;
            }
          }
          // Count hair color
          if (hair && hair.color) {
            if (!groupedData[department].hair[hair.color]) {
              groupedData[department].hair[hair.color] = 1;
            } else {
              groupedData[department].hair[hair.color]++;
            }
          }
          // Map address user to department
          const addressKey = `${firstName} ${lastName}`;
          groupedData[department].addressUser[addressKey] = address.postalCode;
        });
        setData(groupedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-8 text-[12px] h-screen w-full">
      <div className="overflow-auto">

        <table className={"w-full border rounded-md"}>
          <thead>
            <tr className={"truncate bg-[#A0C49D]"}>
              <th className="border border-slate-300 text-left w-[250px] min-w-[250px] px-2">
                Department
              </th>
              <th className="border border-slate-300 text-center w-[80px] min-w-[80px] px-2">
                Male
              </th>
              <th className="border border-slate-300 text-center w-[80px] min-w-[80px] px-2">
                Female
              </th>
              <th className="border border-slate-300 text-center w-[150px] min-w-[150px] px-2">
                Age Range
              </th>
              <th className="border border-slate-300 text-left px-2">
                User / PostalCode
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(data).map((department, index) => (
              <tr
                key={"department" + index}
                className={`${
                  index % 2 === 0 ? "bg-[#D4E2D4]" : "bg-[#FAF3F0]"
                } hover:bg-[#A0C49D]`}
              >
                <td className="border border-slate-300 text-left px-2 align-top">
                  {department}
                </td>
                <td className="border border-slate-300 text-center px-2 align-top">
                  {data[department].male}
                </td>
                <td className="border border-slate-300 text-center px-2 align-top">
                  {data[department].female}
                </td>
                <td className="border border-slate-300 text-center px-2 align-top">
                  {data[department].ageRange}
                </td>
                <td className="border border-slate-300 text-left px-2 align-top">
                  {Object.entries(data[department].addressUser).map(
                    ([name, postalCode], index1) => (
                      <div key={index1}>
                        {name}: {postalCode}
                      </div>
                    )
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default index;
