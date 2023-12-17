const dayjs = require("dayjs");
const customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);
const days = {
  Monday: "Poniedziałek",
  Tuesday: "Wtorek",
  Wednesday: "Środa",
  Thursday: "Czwartek",
  Friday: "Piątek",
  Saturday: "Sobota",
  Sunday: "Niedziela",
};
const SexCalc = (person, personsSex) => {
  const existingSex = personsSex.find(
    (sex) => sex[0] === person.personData.sex
  );
  if (existingSex) {
    existingSex[1] += 1;
  } else {
    personsSex.push([person.personData.sex, 1]);
  }
};

const AgeCalc = (person, personsAges) => {
  const age = dayjs().diff(dayjs(person.personData.birthDate), "year");
  const existingAge = personsAges.find((ageFreq) => ageFreq[0] === age);
  if (existingAge) {
    existingAge[1] += 1;
  } else {
    personsAges.push([age, 1]);
  }
};

const visitMonthCalc = (personVisit, personsVisitsByMonth) => {
  const existingMonth = personsVisitsByMonth.find(
    (visit) => visit[0] === dayjs(personVisit.visit.date).format("YYYY-MM")
  );
  if (dayjs(personVisit.visit.date).isAfter(dayjs().subtract(1, "year"))) {
    if (existingMonth) {
      existingMonth[1] += 1;
    } else {
      personsVisitsByMonth.push([
        dayjs(personVisit.visit.date).format("YYYY-MM"),
        1,
      ]);
    }
  }
};

const visitSexCalc = (personVisit, personsVistsBySex) => {
  const existingSex = personsVistsBySex.find(
    (visit) => visit[0] === personVisit.person.personData.sex
  );
  if (existingSex) {
    existingSex[1] += 1;
  } else {
    personsVistsBySex.push([personVisit.person.personData.sex, 1]);
  }
};

const visitFilteredByDays = (personVisit, personsVisitsByDays) => {
  const existingDay = personsVisitsByDays.find(
    (visit) =>
      visit[0] === days[dayjs(personVisit.visit.date).format("dddd")] &&
      dayjs(personVisit.visit.date).isAfter(dayjs().subtract(1, "year"))
  );

  if (existingDay) {
    existingDay[1] += 1;
  } else {
    personsVisitsByDays.push([
      days[dayjs(personVisit.visit.date).format("dddd")],
      1,
    ]);
  }
};
const visitMeanTimeBySexCalc = (personVisit, personsVisitsMeanBySexTime) => {
  const exsistingSex = personsVisitsMeanBySexTime.find(
    (sex) => sex[0] === personVisit.person.personData.sex
  );
  if (!personVisit.visit.exitTime || !personVisit.visit.enterTime) return;
  const time = dayjs(personVisit.visit.exitTime, "HH:mm:ss").diff(
    dayjs(personVisit.visit.enterTime, "HH:mm:ss"),
    "hours"
  );
  if (exsistingSex) {
    exsistingSex[1] += time;
  } else {
    personsVisitsMeanBySexTime.push([personVisit.person.personData.sex, time]);
  }
};

module.exports = {
  SexCalc,
  AgeCalc,
  visitMonthCalc,
  visitSexCalc,
  visitFilteredByDays,
  visitMeanTimeBySexCalc,
  days,
};
