const dateFormatter = unixDate => {
    const today = new Date().toLocaleString("en-GB", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    const newDate = new Date(unixDate * 1000);
    const dateLong = newDate.toLocaleString("en-GB", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
   
    const time = newDate
      .toString()
      .split("")
      .reverse()
      .join("")
      .slice(45, 50)
      .split("")
      .reverse()
      .join("");
    if (today === dateLong) {
      return { date: "Today", time: time, newDate: newDate };
    } else {
      return { date: dateLong, time: time, newDate: newDate };
    }
  };
  export default dateFormatter