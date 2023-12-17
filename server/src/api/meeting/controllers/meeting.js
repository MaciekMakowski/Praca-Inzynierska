"use strict";

const dayjs = require("dayjs");
var utc = require("dayjs/plugin/utc");
const { days } = require("../../../utils/helpers");
const { createCoreController } = require("@strapi/strapi").factories;
/**
 * meeting controller
 */

const clacByDays = (meeting, meetingsByDays) => {
  const existingDay = meetingsByDays.find(
    (day) =>
      day[0] === days[dayjs(meeting.date).format("dddd")] &&
      dayjs(meeting.date).isAfter(dayjs().subtract(1, "year"))
  );
  if (existingDay) {
    existingDay[1] += 1;
  } else {
    meetingsByDays.push([days[dayjs(meeting.date).format("dddd")], 1]);
  }
};

const calcByMotnh = (meeting, meetingsByMonth) => {
  const existingMonth = meetingsByMonth.find(
    (month) =>
      month[0] === dayjs(meeting.date).format("YYYY-MM") &&
      dayjs(meeting.date).isAfter(dayjs().subtract(1, "year"))
  );
  if (existingMonth) {
    existingMonth[1] += 1;
  } else {
    meetingsByMonth.push([dayjs(meeting.date).format("YYYY-MM"), 1]);
  }
};
const findTenVolunteers = (meeting, topVolunteers) => {
  const existingVolunteer = topVolunteers.find(
    (volunteer) => volunteer[0] === meeting.volunteer.personData.id
  );
  if (existingVolunteer) {
    existingVolunteer[1] += 1;
  } else {
    topVolunteers.push([meeting.volunteer.personData.id, 1]);
  }
};

const calcByDayTime = (meeting, meetingsByDayTime) => {
  if (dayjs(meeting.date).isAfter(dayjs().subtract(1, "year"))) {
    const date = dayjs(meeting.date);
    if (date.isBefore(date.hour(12))) {
      meetingsByDayTime[0][1] += 1;
    } else if (date.isAfter(date.hour(12)) && date.isBefore(date.hour(16))) {
      meetingsByDayTime[1][1] += 1;
    } else {
      meetingsByDayTime[2][1] += 1;
    }
  }
};

module.exports = createCoreController("api::meeting.meeting", ({ strapi }) => ({
  async getStats() {
    const meetings = await strapi.entityService.findMany(
      "api::meeting.meeting",
      {
        populate: {
          guest: {
            populate: ["personData"],
          },
          volunteer: {
            populate: ["personData"],
          },
        },
      }
    );
    const meetingsByMonth = [];
    const meetingsByDays = [];
    const topVolunteers = [];
    const meetingsByDayTime = [
      ["Rano", 0],
      ["Popołudnie", 0],
      ["Wieczór", 0],
    ];
    meetings.forEach((meeting) => {
      clacByDays(meeting, meetingsByDays);
      calcByMotnh(meeting, meetingsByMonth);
      findTenVolunteers(meeting, topVolunteers);
      calcByDayTime(meeting, meetingsByDayTime);
    });

    meetingsByMonth.sort((a, b) => (dayjs(a[0]).isAfter(dayjs(b[0])) ? 1 : -1));
    meetingsByDays.sort((a, b) => b[1] - a[1]);

    topVolunteers.sort((a, b) => b[0] - a[0]);
    topVolunteers.splice(10);
    topVolunteers.forEach((volunteer) => {
      const person = meetings.find(
        (meeting) => meeting.volunteer.personData.id === volunteer[0]
      );
      volunteer[0] =
        person.volunteer.personData.name +
        " " +
        person.volunteer.personData.lastName;
    });

    return {
      meetingsByMonth,
      meetingsByDays,
      topVolunteers,
      meetingsByDayTime,
    };
  },
}));
