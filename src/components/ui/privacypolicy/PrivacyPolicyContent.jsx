import React from "react";

export default function PrivacyPolicyContent() {
  return (
    <div className="bg-black px-6 md:px-40 py-12 mx-auto text-gray-200 leading-relaxed space-y-6 text-sm md:text-[18px]">
      <p>
        <strong>Effective Date:</strong> July 1, 2025
      </p>

      <p>
        At <strong>MetaNerds.tech</strong>, accessible from{" "}
        <a
          href="https://metanerds.tech"
          className="text-blue-400 underline hover:text-blue-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://metanerds.tech
        </a>
        , one of our core priorities is the privacy of our visitors and clients.
        This Privacy Policy outlines the types of information we collect, how we
        use it, and your rights in relation to your personal data.
      </p>

      <p>
        If you have any questions or require more information, feel free to
        contact us at{" "}
        <a
          href="mailto:contact@metanerds.tech"
          className="text-blue-400 underline hover:text-blue-300"
        >
          contact@metanerds.tech
        </a>
        .
      </p>

      <h2 className="text-sm md:text-[18px] font-semibold text-white">
        Consent
      </h2>
      <p>
        By using our website, you hereby consent to our Privacy Policy and agree
        to its terms.
      </p>

      <h2 className="text-sm md:text-[18px] font-semibold text-white">
        Information We Collect
      </h2>
      <p>We may collect personal information when you:</p>
      <ul className="list-disc pl-6">
        <li>Visit our website</li>
        <li>Fill out a form</li>
        <li>Contact us via email or chat</li>
        <li>Subscribe to a newsletter</li>
        <li>Request a quote or proposal</li>
      </ul>
      <p>The types of personal information we may collect include:</p>
      <ul className="list-disc pl-6">
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Company name</li>
        <li>Any other information you voluntarily provide</li>
      </ul>
      <p>We also collect non-personal information such as:</p>
      <ul className="list-disc pl-6">
        <li>Browser type</li>
        <li>IP address</li>
        <li>Pages visited</li>
        <li>Time spent on site</li>
      </ul>
      <p>
        This information is used to improve the performance and user experience
        of our website.
      </p>

      <h2 className="text-sm md:text-[18px]font-semibold text-white">
        How We Use Your Information
      </h2>
      <ul className="list-disc pl-6">
        <li>Provide and maintain our services</li>
        <li>Improve, personalize, and expand our website</li>
        <li>Understand how users interact with our website</li>
        <li>Communicate with you regarding services or inquiries</li>
        <li>Send marketing or promotional materials (with your consent)</li>
        <li>Detect and prevent fraud or misuse</li>
      </ul>

      <h2 className="text-sm md:text-[18px] font-semibold text-white">
        Log Files
      </h2>
      <p>
        MetaNerds.tech follows standard procedures for using log files. These
        files log visitors when they visit websites. The information collected
        includes IP addresses, browser type, referring pages, date and time, and
        click patterns. These are not linked to any personally identifiable
        information and are used purely for analytics and site performance
        tracking.
      </p>

      <h2 className="text-sm md:text-[18px] font-semibold text-white">
        Cookies
      </h2>
      <p>
        Our website may use cookies to enhance your browsing experience. You can
        choose to disable cookies through your browser settings. Note that
        disabling cookies may affect the functionality of certain parts of the
        site.
      </p>

      <h2 className="text-sm md:text-[18px] font-semibold text-white">
        Data Protection Rights (GDPR & CCPA)
      </h2>
      <p>
        If you are a resident of the European Economic Area (EEA) or California,
        you have the right to:
      </p>
      <ul className="list-disc pl-6">
        <li>Access the personal data we hold about you</li>
        <li>Request corrections to inaccurate data</li>
        <li>Request deletion of your personal data</li>
        <li>Object to or restrict our processing of your data</li>
        <li>Request data portability to another provider</li>
      </ul>
      <p>
        If you wish to exercise any of these rights, please contact us at{" "}
        <a
          href="mailto:contact@metanerds.tech"
          className="text-blue-400 underline hover:text-blue-300"
        >
          contact@metanerds.tech
        </a>
        . We will respond within 30 days.
      </p>

      <h2 className="text-sm md:text-[18px] font-semibold text-white">
        Children's Privacy
      </h2>
      <p>
        MetaNerds.tech does not knowingly collect any personal information from
        children under the age of 13. If you believe your child has provided
        such information, please contact us immediately and we will take steps
        to remove it from our records.
      </p>

      <h2 className="text-sm md:text-[18px] font-semibold text-white">
        Changes to This Privacy Policy
      </h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with an updated effective date. Continued use of the
        website after such updates constitutes your agreement to the revised
        policy.
      </p>
    </div>
  );
}
