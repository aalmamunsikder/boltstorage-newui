import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import SignInForm from "../../components/auth/SignInForm";

export default function SignIn() {
  return (
    <>
      <PageMeta
        title="Sign In | BoltStorage - Cloud Storage"
        description="Sign in to your BoltStorage account to access your files"
      />
      <AuthLayout>
        <SignInForm />
      </AuthLayout>
    </>
  );
}
