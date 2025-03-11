// Page.jsx
"use client";

import React, { useState, useEffect } from "react";
import * as motion from "motion/react-client";
import { Calendar, FolderGit2, GitPullRequestArrow, Star } from "lucide-react";

function Github() {
  const [gitData, setGitData] = useState(null);
  const [load, setLoad] = useState(true);
  const username = "PriyanshuValiya";

  useEffect(() => {
    const fetchGitData = async () => {
      try {
        const response = await fetch(`/api/github?username=${username}`);
        const data = await response.json();

        if (response.ok) {
          setGitData(data);
        } else {
          console.error("Error:", data.error);
        }
      } catch (error) {
        console.error("API Fetch Error:", error);
      } finally {
        setLoad(false);
      }
    };

    fetchGitData();
  }, []);

  if (load) {
    return <p className="text-center">Loading...</p>;
  }

  if (!gitData) {
    return <p className="text-center text-red-500">Failed to load data</p>;
  }

  const contributions = gitData?.contributions || [];
  const totalContributions = gitData?.user?.totalContributions || 0;

  const currentStreak = contributions
    .slice()
    .reverse()
    .reduce((streak, day, index) => {
      if (index === 0 && day.count === 0) {
        return 0;
      }
      return day.count > 0 ? streak + 1 : streak;
    }, 0);

  const maxContributions = Math.max(
    ...contributions.map((day) => day.count),
    0
  );

  const getContributionLevel = (count) => {
    if (count === 0) {
      return "bg-muted";
    }

    const percentage = (count / maxContributions) * 100;

    if (percentage <= 25) {
      return "bg-green-700";
    }
    if (percentage <= 50) {
      return "bg-green-500";
    }
    if (percentage <= 75) {
      return "bg-green-300";
    }

    return "bg-primary";
  };

  return (
    <motion.div
      id="about"
      className="w-full px-[12%] pt-10 pb-10 scroll-mt-20"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        What I Did
      </motion.h4>
      <motion.h2 className="text-center text-5xl font-Ovo">
        Github Activities
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-20 mt-10 mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <StatsCard
          title="Current Streak"
          value={currentStreak}
          icon={<Calendar />}
          unit="days"
        />
        <StatsCard
          title="Contributions"
          value={totalContributions}
          icon={<GitPullRequestArrow />}
          unit="till now"
        />
        <StatsCard
          title="Best Commit"
          value={maxContributions}
          icon={<Star />}
          unit="in a day"
        />
        <StatsCard
          title="Repositories"
          value={gitData.data.public_repos}
          icon={<FolderGit2 />}
          unit="public repos"
        />
      </motion.div>

      <div>
        <h4 className="text-xl font-medium text-muted-foreground">
          Last 30 day's Status...
        </h4>
        <div className="overflow-hidden mt-19 pt-10 mb-20">
          <div className="flex flex-wrap justify-around gap-1 min-w-[600px]">
            {contributions.slice(-30).map((day, index) => (
              <div
                key={index}
                className={`border dark:border-white border-black relative flex h-5 w-5 rounded ${getContributionLevel(
                  day.count
                )}`}
                title={`${day.date}: ${day.count} contributions`}
              >
                <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-1 py-0.5 rounded opacity-0 transition-opacity duration-200 hover:opacity-100">
                  {day.date} : {day.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const StatsCard = ({ title, value, icon, unit }) => (
  <div className="h-48 w-48 p-5 border-[0.5px] border-gray-400 rounded-xl cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
    <div className="flex gap-x-2 items-center">
      {icon} <p className="dark:text-white font-semibold">{title}</p>
    </div>
    <div className="flex flex-col items-center py-5 gap-y-3">
      <p className="text-6xl font-bold font-mono">{value}</p>
      <p className="text-xl font-semibold">{unit}</p>
    </div>
  </div>
);

export default Github;
