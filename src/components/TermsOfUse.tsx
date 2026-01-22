import { Container, Typography, Box, ListItem, List } from "@mui/material";

const TermsOfUse = () => {
  return (
    <Container sx={{ py: 5, pt: 20, minHeight: 2000 }}>
      <Box
        sx={{
          p: 8,
          color: "brown",
          textAlign: "justify",
        }}
      >
        <Typography variant="h3" gutterBottom>
          Terms of Use
        </Typography>
        <Typography paragraph>
          Thank you for visiting www.balkanwineshelf.com These Terms and
          Conditions of Use (“Terms of Use”) contain the terms and provisions
          applicable to you (“User”) and your access to and use of this Website.
          Your use of the Website and any other feature, content or application
          offered by the Website is subject at all times to these Terms of Use
          and all applicable laws, rules and regulations. Please read these
          Terms of Use carefully and contact us with any questions.
        </Typography>
        <Typography paragraph>
          By accessing this Website, you agree that you have read, understand
          and agree to be legally bound by the terms and conditions set forth
          below. If you do not agree to be bound by these Terms of Use, please
          exit the Website immediately. These Terms of Use may be modified,
          changed or altered by us at any time without prior notice. In agreeing
          to these Terms of Use, you are responsible for periodically checking
          for changes and/or updates to these Terms of Use.
        </Typography>
        <Typography paragraph>
          We reserve the right to revise these Terms of Use from time to time at
          our discretion. Such revisions will be effective immediately upon
          publication on this website. We recommend you review the terms for
          amendments each time you use the website and before placing any Order.
          By continuing to use this website after such publication, you agree to
          be bound by these Terms of Use as revised. Any changes to these Terms
          of Use will apply to any Order you place from the effective date of
          the change.
        </Typography>
        <Typography variant="h4" gutterBottom>
          Registration
        </Typography>
        <Typography paragraph>
          To become a member of the website, you must provide your name and
          address, telephone number, a valid email address and nominate a
          password. If you do not provide accurate and complete details, we may
          not be able to activate your membership or supply goods or services to
          you. You agree to keep your membership details current at all times by
          accessing your account via the website.
        </Typography>
        <Typography variant="h4" gutterBottom>
          Permitted Users
        </Typography>
        <Typography paragraph>
          To use this Website, you must be of legal age to purchase and consume
          alcoholic beverages. If you are not of legal drinking age, please exit
          this Website immediately. In accessing and using the Website, you
          represent and warrant that:
        </Typography>
        <Box component="ul" sx={{ ml: 4, color: "brown" }}>
          <List
            sx={{
              listStyleType: "disc",
              "& .MuiListItem-root": {
                display: "list-item",
              },
            }}
          >
            <ListItem>
              all registration information you submit is truthful and accurate;
            </ListItem>
            <ListItem>
              you will maintain the accuracy of such information;
            </ListItem>
            <ListItem>you are 21 years of age or older;</ListItem>
            <ListItem>
              your use of the Website does not violate any applicable law or
              regulation.
            </ListItem>
          </List>
        </Box>
        <Typography variant="h4" gutterBottom>
          Communications
        </Typography>
        <Typography paragraph>
          By providing your telephone number, you are providing express written
          consent to receive communications from BWS (including its affiliates,
          agents, and service providers for the purposes of defined above) for
          any purpose, including but not limited to, marketing various benefits
          or services from BWS. Additionally, you agree to receive
          communications from BWS regarding any service, and any information you
          may have obtained via your use of the App.
        </Typography>

        <Typography variant="h4" gutterBottom>
          The Sale of Alcoholic Beverages
        </Typography>
        <Typography paragraph>
          By using this site you swear and affirm and represent to us that you
          are over the legal age required to buy alcoholic beverages and
          products and we will rely upon this representation because if we are
          held liable for any reason if that is not true, you agree to indemnify
          us and/or reimburse us and be responsible for all costs, expenses
          (including legal fees) and damages we suffer or incur. We make every
          effort to ensure that alcoholic beverages are not sold or delivered to
          anyone who is under the age of 21. By using this site you are
          acknowledging that the person receiving a shipment of alcoholic
          beverages from us is over the age of 21. If you cannot make these
          affirmations and representations or you do not agree with all of these
          conditions of use please do not use this site. If you intentionally or
          unintentionally misrepresent your age in order to obtain or provide
          alcohol to a person under the age of 21, we will report this to the
          appropriate authorities and prosecute you fully to the extent
          allowable by law.
        </Typography>
        <Typography variant="h4" gutterBottom>
          Orders
        </Typography>
        <Typography paragraph>
          After you place an order using our shopping cart, we will check the
          information you give us for validity and compliance with state laws
          and regulations, by verifying your method of payment or shipping
          address. You will receive an email from balkanwineshelf.com as soon as
          practicable after you have confirmed your Order and made payment. We
          reserve the right to reject any order you place with us, and/or to
          limit quantities on any order, without giving any reason. If we reject
          your order, we will attempt to notify you using the e-mail address you
          have given us with the order.
        </Typography>
        <Typography variant="h4" gutterBottom>
          Term
        </Typography>
        <Typography paragraph>
          These Terms of Use shall remain in full force and effect while you use
          the Website or are registered with us. Even after your registration is
          terminated by you or us, you continue to remain bound by these Terms
          of Use to the extent you continue to access the Website in any
          capacity and for any use prior to such termination.
        </Typography>
        <Typography variant="h4" gutterBottom>
          Termination of Access
        </Typography>
        <Typography paragraph>
          You may terminate your registration and block your access to the
          Website at any time, for any reason. In addition to any right or
          remedy that may be available to us under these Terms of Use or
          applicable law, we may suspend, limit or terminate your access to the
          Website, at any time with or without notice and with or without cause.
          In addition, we may refer any information on illegal activities,
          including your identity, to the proper authorities.
        </Typography>
      </Box>
    </Container>
  );
};

export default TermsOfUse;
