import React from "react";

const Terms = () => {
  return (
    <div className="mx-44 mt-20">
      <h1 className="font-bold text-6xl mb-10 ">Terms & Conditions</h1>
      <p className="mb-5">Effectivity: {new Date().toLocaleDateString()}</p>
      <h2 className="font-bold">1. Acceptance of Terms</h2>
      <p className="mb-5 pl-10">
        By using our website, you acknowledge that you have read, understood,
        and agree to be bound by these Terms and Conditions, as well as our
        Privacy Policy.
      </p>
      <h2 className="font-bold">2. User Responsibilities</h2>
      <ul className="pl-10 mb-5">
        <li>-You must be at least 13 years old to use our website.</li>
        <li>
          -You agree to provide accurate and complete information when creating
          an account.
        </li>
        <li>
          -You are responsible for maintaining the confidentiality of your
          account information and for all activities that occur under your
          account.
        </li>
      </ul>
      <h2 className="font-bold">3. Content Submission</h2>
      <ul className="pl-10 mb-5">
        <li>
          -You retain ownership of any content you submit to our platform.
          However, by submitting content, you grant us a non-exclusive,
          worldwide, royalty-free license to use, reproduce, modify, and
          distribute that content.
        </li>
        <li>
          -You are solely responsible for the content you submit and must ensure
          it does not violate any laws or infringe on the rights of others.
        </li>
      </ul>
      <h2 className="font-bold">4. Prohibited Conduct</h2>
      <ul className="pl-10 mb-5">
        You agree not to:
        <li>-Use the website for any illegal or unauthorized purpose.</li>
        <li>-Submit false or misleading information.</li>
        <li>
          -Engage in any form of harassment, abuse, or threats against other
          users.
        </li>
        <li>
          -Post any content that is defamatory, obscene, or otherwise
          objectionable.
        </li>
      </ul>
      <h2 className="font-bold">5. Intellectual Property</h2>
      <p className="pl-10 mb-5">
        All content and materials on{" "}
        <i className="font-semibold">Writing Blog</i>, including but not limited
        to text, graphics, logos, and software, are the property of{" "}
        <i className="font-semibold">Writing Blog</i> or its licensors. You may
        not use, reproduce, or distribute any content without our express
        written permission.
      </p>
      <h2 className="font-bold">6. Termination</h2>
      <p className="pl-10 mb-5">
        We reserve the right to suspend or terminate your account and access to
        the website at our discretion, without notice, if you violate these
        Terms and Conditions.
      </p>
      <h2 className="font-bold">7. Disclaimer of Warranties</h2>
      <p className="pl-10 mb-5">
        The website is provided on an "as-is" and "as-available" basis. We make
        no warranties, express or implied, regarding the operation of the
        website or the information provided therein.
      </p>
      <h2 className="font-bold">8. Limitation of Liability</h2>
      <p className="pl-10 mb-5">
        To the fullest extent permitted by law, [Your Website Name] shall not be
        liable for any direct, indirect, incidental, or consequential damages
        arising from your use of or inability to use the website.
      </p>
      <h2 className="font-bold">9. Changes to Terms</h2>
      <p className="pl-10 mb-5">
        We reserve the right to modify these Terms and Conditions at any time.
        We will notify you of any changes by posting the updated terms on this
        page. Your continued use of the website after such changes constitutes
        your acceptance of the new Terms and Conditions.
      </p>
      <h2 className="font-bold">10. Governing Law</h2>
      <p className="pl-10 mb-5">
        These Terms and Conditions shall be governed by and construed in
        accordance with the laws of the United States.
      </p>
      <h2 className="font-bold">11. Contact Information</h2>
      <p className="pl-10 mb-5">
        If you have any questions about these Terms and Conditions, please
        contact us at [Your Contact Email].
      </p>
    </div>
  );
};

export default Terms;
