import {useEffect, useRef, useState} from "react";
import "tailwindcss/tailwind.css";

function ItemLook({index, name}) {
  return (
    <div className="border-2 h-[40px] gap-4 hover:cursor-pointer flex justify-center items-center ">
      <span className="pl-2">{name}</span>
    </div>
  );
}

function test_solution() {
  const [dataTest, setDataTest] = useState([
    {type: "Fruit", name: "Apple"},
    {type: "Vegetable", name: "Broccoli"},
    {type: "Vegetable", name: "Mushroom"},
    {type: "Fruit", name: "Banana"},
    {type: "Vegetable", name: "Tomato"},
    {type: "Fruit", name: "Orange"},
    {type: "Fruit", name: "Mango"},
    {type: "Fruit", name: "Pineapple"},
    {type: "Vegetable", name: "Cucumber"},
    {type: "Fruit", name: "Watermelon"},
    {type: "Vegetable", name: "Carrot"},
  ]);

  const [dataTemporary, setDataTemporary] = useState([]);
  const [lastInteractionTime, setLastInteractionTime] = useState(null);
  console.log("lastInteractionTime", lastInteractionTime);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (lastInteractionTime >= 5000) {
        // setDataTemporary((prevData) => {
        //   const newData = prevData.filter((item , index) => {
        //     setDataTest((prevData) => [...prevData, item[index]]);
        //     console.log('dataTest',dataTest)
        //   });

        //   return newData;
        // });
        setDataTemporary((prevData) => {
          const newData = prevData.filter((item, index) => item);
        
          let currentIndex = 0;
          const intervalId = setInterval(() => {
            if (currentIndex < newData.length) {
              const itemToSend = newData[currentIndex];
        
              setDataTest((prevData) => [...prevData, itemToSend]);
              setDataTemporary((prevData) => prevData.filter((item) => item !== itemToSend));
              currentIndex++;
            } else {
              clearInterval(intervalId);
            }
          }, 1000);
        
          return newData;
        });

      }
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [lastInteractionTime]);

  function handleItemClick(item) {
    if (dataTemporary.includes(item)) {
      setDataTemporary((prevData) => prevData.filter((i) => i !== item));
    } else {
      setDataTest((prevData) => prevData.filter((i) => i !== item));
      setDataTemporary((prevData) => [...prevData, item]);
      setLastInteractionTime(Date.now());
    }
  }

  const handleTemporaryItemClick = (item) => {
    setDataTest((prevDataTest) => {
      const itemExistsInDataTest = dataTest.some((dataTestItem) => dataTestItem === item);
      if (!itemExistsInDataTest) {
        return [...prevDataTest, item];
      }
      return prevDataTest;
    });
    setLastInteractionTime(Date.now());
    setDataTemporary((prevDataTemporary) => prevDataTemporary.filter((i) => i !== item));
  };

  return (
    <div>
      <div className={`grid grid-cols-3 gap-2 text-center p-4`}>
        <div className="col-span-1">
          <div className={`flex flex-col gap-2 h-[40px] mb-4`}>
            {dataTest.map((item, index) => (
              <div key={index} onClick={() => handleItemClick(item, false)}>
                <ItemLook index={index + 1} name={item.name} />
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-1 h-[90vh] ml-4">
          <div className="h-[40px] bg-gray-100 flex items-center justify-center">Fruit</div>
          <div className={`flex flex-col gap-2 h-full mb-4 border p-2`}>
            {dataTemporary.map((item, index) => {
              if (item.type === "Fruit") {
                return (
                  <div key={index} onClick={() => handleTemporaryItemClick(item)}>
                    <ItemLook index={index + 1} name={item.name} />
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className="col-span-1 h-[90vh]">
          <div className="h-[40px] bg-gray-100 flex items-center justify-center">Vegetable</div>
          <div className={`flex flex-col gap-2 h-full mb-4 border p-2`}>
            {dataTemporary.map((item, index) => {
              if (item.type === "Vegetable") {
                return (
                  <div key={index} onClick={() => handleTemporaryItemClick(item)}>
                    <ItemLook index={index + 1} name={item.name} />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default test_solution;
