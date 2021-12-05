const re =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const validateEmail = (emails) => {
  const invalidEmials = emails
    .split(',')
    .map((email) => email.trim())
    .filter((email) => re.test(email) === false);

  if (invalidEmials.length) {
    return `This emails are invalid: ${invalidEmials}`;
  }
  return;
};
export default validateEmail;
