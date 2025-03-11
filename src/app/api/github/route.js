import { NextResponse } from "next/server";
import { Octokit } from "octokit";

const octoKit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json(
      { error: "Username is required" },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(
    `https://api.github.com/users/PriyanshuValiya`
  );

  const data = await res.json();

    const query = `
      query ($username: String!) {
        user(login: $username) {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                }
              }
            }
          }
        }
      }
    `;

    const response = await octoKit.graphql(query, { username });

    // Extracting the contributions calendar data correctly
    const calendar = response.user.contributionsCollection.contributionCalendar;

    const contributions = calendar.weeks.flatMap((week) =>
      week.contributionDays.map((day) => ({
        count: day.contributionCount,
        date: day.date,
      }))
    );

    return NextResponse.json({
      user: { totalContributions: calendar.totalContributions },
      contributions,
      data: data
    });
  } catch (err) {
    console.error("GitHub API Error:", err);

    return NextResponse.json(
      { error: "Failed to fetch GitHub contributions" },
      { status: 500 }
    );
  }
}
