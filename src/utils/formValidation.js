export const validateForm = (email, password) => {
  const errors = {};

  // Check if email is empty
  if (!email) {
    errors.email = "Email is required!";
  } else if (
    !/^[a-zA-Z0-9_.+\-]+[\x40][a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email)
  ) {
    errors.email = "Email not valid!";
  }

  // Check if password is empty
  if (!password) {
    errors.password = "Password is required!";
  } else if (
    !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    )
  ) {
    errors.password = "Password not valid!";
  }

  return Object.keys(errors).length > 0 ? errors : null;
};
