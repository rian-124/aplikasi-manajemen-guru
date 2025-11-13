import FormLogin from "./component/fragments/FormLogin";
import AuthLayout from "./component/layouts/AuthLayout";

export default function LoginContainer() {
  return (
    <AuthLayout>
      <FormLogin title="Sign in to SAMG" />
    </AuthLayout>
  );
}
