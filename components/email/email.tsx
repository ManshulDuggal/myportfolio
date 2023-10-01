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
    <h1 className="text-xl">{subject}</h1>
    <h1 className="text-xs">{email}</h1>
    <h1>Hi my name is {name} </h1>
    <p>{message}</p>
  </div>
);
