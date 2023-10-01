import * as React from "react";

interface EmailTemplateProps {
  name: string;
  subject: string;
  message: string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
  message,
  name,
  subject,
}) => (
  <div>
    <h1>Welcome, {name}</h1>
  </div>
);
