import FormForgotPassword from "./component/fragments/FormForgotPassword";
import AuthLayout from "./component/layouts/AuthLayout";

export default function ForgotPasswordContainer() {
  return (
    <AuthLayout>
      <FormForgotPassword title="Input your email account to get new password" />
    </AuthLayout>
  );
}
