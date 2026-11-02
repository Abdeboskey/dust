const { CAL_API, CAL_ID } = process.env;

const HEADERS = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Methods": "GET",
  "Cache-Control": "public, max-age=0, must-revalidate",
  "Netlify-CDN-Cache-Control": "public, durable, s-maxage=900, stale-while-revalidate=3600",
};

const buildCalendarURL = () => {
  const params = new URLSearchParams({
    orderBy: "startTime",
    singleEvents: "true",
    maxResults: "10",
    timeMin: new Date().toISOString(),
    key: CAL_API,
  });
  return `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CAL_ID)}/events?${params}`;
};

export const handler = async (event) => {
  if (event.httpMethod !== "GET") {
    return { statusCode: 405, headers: { Allow: "GET" } };
  }

  if (!CAL_API || !CAL_ID) {
    console.error("calFetch: CAL_API and/or CAL_ID environment variables are not set");
    return { statusCode: 500, body: JSON.stringify({ error: "Calendar is not configured" }) };
  }

  try {
    const response = await fetch(buildCalendarURL());
    const data = await response.json();

    if (!response.ok) {
      console.error(`calFetch: Google Calendar API returned ${response.status}`, data?.error?.message);
      return { statusCode: 502, body: JSON.stringify({ error: "Calendar service error" }) };
    }

    return {
      statusCode: 200,
      headers: HEADERS,
      body: JSON.stringify(data.items ?? []),
    };
  } catch (e) {
    console.error("calFetch:", e);
    return { statusCode: 500, body: JSON.stringify({ error: "Failed to fetch calendar" }) };
  }
};
