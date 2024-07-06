// import Form from "../components/Pages/Form";
import { useTheme } from "../components/ThemeContext";
import { AuthLayout } from "../components/Layouts/AuthLayout";
import { LoginForm } from "../components/Fragments/LoginForm";

const LogIn = () => {
  const { isDarkMode } = useTheme();
  return (
    <>
      {/* Alternate color bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-[#D6D6D6] via-[#8C8C8C] to-[#0B0909] */}
      <section className={`bg-style ${isDarkMode ? "" : ""}`}>
        <AuthLayout type="log-in">
          <LoginForm />
        </AuthLayout>
      </section>
    </>
  );
};

export default LogIn;
