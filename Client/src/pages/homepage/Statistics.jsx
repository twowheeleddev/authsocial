import { useEffect, useState } from "react";

const statisticsData = [
  {
    value: "580,000+",
    text: "People experience homelessness on any given night in the United States.",
  },
  {
    value: "37%",
    text: "Of the homeless population are families with children.",
  },
  {value: "17%", text: "Are chronically homeless individuals."},
  {value: "50%", text: "Of the homeless population are over the age of 50."},
  {value: "10%", text: "Of the homeless population are veterans."},
  {value: "20%", text: "Of homeless individuals are youths under 18."},
  {
    value: "25%",
    text: "Of the homeless population suffers from mental illness.",
  },
  {
    value: "15%",
    text: "Of homeless individuals are victims of domestic violence.",
  },
  {value: "30%", text: "Of homeless individuals are employed."},
  {value: "60%", text: "Of the homeless population are men."},
  {value: "40%", text: "Of the homeless population are women and children."},
  {value: "18%", text: "Of the homeless population have addiction issues."},
  {
    value: "25%",
    text: "Of the homeless population are in unsheltered locations.",
  },
  {value: "20%", text: "Of homeless youth identify as LGBTQ+."},
  {value: "12%", text: "Of the homeless population are elderly (62+)."},
  {value: "70%", text: "Of the homeless population are single adults."},
  {
    value: "15%",
    text: "Of homeless individuals have experienced domestic violence.",
  },
  {value: "9%", text: "Of homeless veterans are women."},
  {value: "7%", text: "Increase in homelessness over the past year."},
  {
    value: "45%",
    text: "Of homeless individuals suffer from chronic health conditions.",
  },
  {value: "22%", text: "Of the homeless population are children under 18."},
  {value: "5%", text: "Of homeless families have three or more children."},
  {value: "35%", text: "Of the homeless population are African American."},
  {
    value: "200,000+",
    text: "Homeless individuals are part of families with children.",
  },
  {
    value: "76,000+",
    text: "Veterans experience homelessness on any given night.",
  },
  {value: "3,000+", text: "Homeless individuals are in New York City alone."},
  {
    value: "1,800+",
    text: "Homeless shelters available across the United States.",
  },
  {value: "400,000+", text: "Homeless individuals are single adults."},
  {value: "45,000+", text: "Homeless individuals are youths aged 18-24."},
  {value: "10,000+", text: "Homeless individuals are in Los Angeles County."},
  {
    value: "5,000+",
    text: "Homeless individuals are in the San Francisco Bay Area.",
  },
  {value: "3,000+", text: "Homeless individuals are in Washington, D.C."},
  {
    value: "150,000+",
    text: "Homeless individuals are considered chronically homeless.",
  },
];

const getRandomIndices = excludeIndices => {
  let randomIndices = [];
  while (randomIndices.length < 3) {
    const randomIndex = Math.floor(Math.random() * statisticsData.length);
    if (
      !excludeIndices.includes(randomIndex) &&
      !randomIndices.includes(randomIndex)
    ) {
      randomIndices.push(randomIndex);
    }
  }
  return randomIndices;
};

const Statistics = () => {
  const [currentStatistics, setCurrentStatistics] = useState([0, 1, 2]);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        const newStatistics = getRandomIndices(currentStatistics);
        setCurrentStatistics(newStatistics);
        setFade(true);
      }, 1000); // Duration of fade-out
    }, 4000); // Duration between statistics change

    return () => clearInterval(interval);
  }, [currentStatistics]);

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary-light dark:text-primary-dark">
        Homelessness in America
      </h2>
      <div
        className={`flex justify-around mx-6 px-6 transition-opacity duration-1000 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {currentStatistics.map(index => (
          <div
            key={index}
            className="text-center p-6 transform transition-transform hover:cursor-pointer hover:scale-105"
          >
            <h3 className="text-2xl text-primary-light dark:text-primary-dark font-semibold">
              {statisticsData[index].value}
            </h3>
            <p className="text-md text-secondary-light dark:text-secondary-dark mb-20">
              {statisticsData[index].text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
