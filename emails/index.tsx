import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface WelcomeEmailProps {
  userFirstname: string;
  userEmail: string;
  userMessage: string;
}

export const WelcomeEmail = ({
  userFirstname,
  userEmail,
  userMessage,
}: WelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>
      The sales intelligence platform that helps you uncover qualified leads.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`https://icon-library.com/images/users-icon/users-icon-13.jpg`}
          width="100"
          height="100"
          alt="Koala"
          style={logo}
        />
        <Text style={paragraph}>Hi, my name is {userFirstname},</Text>
        <Hr style={hr} />

        <Text style={emailStyle}>{userMessage}</Text>
        <Hr style={hr} />

        <Text style={paragraph}>
          Best,
          <br />
          {userFirstname}
        </Text>
        <Hr style={hr} />
      </Container>
    </Body>
  </Html>
);

WelcomeEmail.PreviewProps = {
  userFirstname: "",
} as WelcomeEmailProps;

export default WelcomeEmail;

const main = {
  backgroundColor: "#DCDCDC",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "20px",
  lineHeight: "26px",
};

const emailStyle = {
  fontSize: "16px",
  lineHeight: "26px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};
