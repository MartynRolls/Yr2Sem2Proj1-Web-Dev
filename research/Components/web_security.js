export const web_security_data = {
    front: `
<h2>Web Security</h2>
<img src="Images/Web Security.png" alt="" style="max-height:60%;max-width:90%;">
    `,

    back: `
<h3>Five common cyber attacks and preventive measures:</h3>
<ul>
  <li><strong>Phishing</strong> – deceptive emails/links to steal credentials. Prevention: user education, spam filters, multi-factor authentication.</li>
  <li><strong>SQL Injection</strong> – malicious code inserted into input fields to manipulate a database. Prevention: parameterised queries, input validation.</li>
  <li><strong>Cross-Site Scripting (XSS)</strong> – injecting malicious scripts into web pages viewed by others. Prevention: input sanitisation, Content Security Policy (CSP).</li>
  <li><strong>Distributed Denial of Service (DDoS)</strong> – overwhelming a server with traffic to take it offline. Prevention: traffic filtering, rate limiting, CDN/DDoS protection services.</li>
  <li><strong>Malware/Ransomware</strong> – malicious software that damages systems or holds data hostage. Prevention: regular updates, antivirus software, backups, restricted access permissions.</li>
</ul>
<h3>How this applies to my Project 1</h3>
<p>Some potential threats to my website include SL Injection and Cross-Site Scripting because of the form page. While there are already some checks in place for input validation, there's still some oppertunities for bad actors with some inputs such as the comment box. In the future it may be beneficial to use stricter input validation to prevent this risk. Another threat might be DDoS attacks on the site; while hosting on GitHub does provide some basic protections to hosted sites, it may be beneficial to use a more dedicated service such as Cloudflare.
    `
}
