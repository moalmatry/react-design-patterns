import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const SignInForm = () => {
  const signInForm = () => {
    // TODO: Implement sign in form
  };

  const handleSubmit = () => {
    // TODO: Implement submit logic
  };

  return (
    <Card>
      <Input
        name="email"
        type="
      email"
        className="mb-4"
      />
      <Input name="password" className="mb-4" type="password" />

      <Button>Sign In</Button>
    </Card>
  );
};

export default SignInForm;
