import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import SignUpForm from "../../components/auth/SignUpForm";

export default function SignUp() {
  return (
    <>
      <PageMeta
        title="Sign Up | BoltStorage - Cloud Storage"
        description="Create your BoltStorage account and get 10GB free storage"
      />
      <AuthLayout>
        <SignUpForm />
      </AuthLayout>
    </>
  );
}
