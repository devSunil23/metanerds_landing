const recipient = "contact@metanerds.tech";
const subject = "";
const body = encodeURIComponent("Hi team, I have a question about...");
export const openGmailCompose = () => {
  const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;
  window.open(url, "_blank");
};
