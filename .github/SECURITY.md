# Security Policy

## Supported Versions

We release patches for security vulnerabilities. Which versions are eligible
for receiving security updates depends on the CVSS v3.0 Rating:

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |
| < Latest| :x:                |

## Reporting a Vulnerability

We take the security of Magic Resume seriously. If you believe you have found a security vulnerability, please report it to us as described below.

### Please do NOT:

- Open a public GitHub issue
- Discuss the vulnerability publicly
- Share the vulnerability with others until it has been resolved

### Please DO:

1. **Email the maintainer** or use GitHub's private security advisory feature:
   - Go to https://github.com/ThanosKa/magic-resume/security/advisories/new
   - Click "Report a vulnerability"
   - Fill out the form with details about the vulnerability

2. **Include the following information**:
   - Type of vulnerability (e.g., XSS, CSRF, SQL injection, etc.)
   - Full paths of source file(s) related to the vulnerability
   - The location of the affected code (tag/branch/commit or direct URL)
   - Step-by-step instructions to reproduce the issue
   - Proof-of-concept or exploit code (if possible)
   - Impact of the vulnerability, including how an attacker might exploit it

3. **Wait for a response**:
   - You should receive an acknowledgment within 48 hours
   - We'll work with you to understand and resolve the issue quickly
   - We'll keep you informed of our progress

### What to Expect

- **Acknowledgment**: We'll acknowledge receipt of your report within 48 hours
- **Initial Assessment**: We'll provide an initial assessment within 7 days
- **Updates**: We'll keep you informed of our progress every 7-14 days
- **Resolution**: We'll work to resolve the issue as quickly as possible

### Disclosure Policy

- We'll work with you to fix the vulnerability before public disclosure
- We'll credit you in our security advisories (unless you prefer to remain anonymous)
- We'll coordinate public disclosure timing with you

## Security Best Practices

When using Magic Resume, please follow these security best practices:

### For Users

- **Keep dependencies updated**: Regularly update your dependencies to receive security patches
- **Use environment variables**: Never commit API keys or secrets to version control
- **Validate input**: Always validate user input on both client and server side
- **Use HTTPS**: Always use HTTPS in production environments
- **Review dependencies**: Regularly review your dependencies for known vulnerabilities

### For Contributors

- **Follow secure coding practices**: Review [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- **Sanitize user input**: Never trust user input; always validate and sanitize
- **Use parameterized queries**: If adding database functionality, use parameterized queries
- **Keep dependencies updated**: Regularly update dependencies and review security advisories
- **Review code changes**: All code changes should be reviewed for security implications

## Known Security Considerations

### Current Security Features

- Client-side data persistence (localStorage) - data stays local
- Server-side PDF generation with input validation
- API routes with proper error handling
- Environment variable protection for API keys

### Areas of Focus

- Input validation and sanitization
- XSS prevention
- CSRF protection for API routes
- Secure handling of user-generated content
- Dependency vulnerability management

## Security Updates

Security updates will be announced via:
- GitHub Security Advisories
- Release notes
- Repository announcements

## Contact

For security-related questions or concerns, please use:
- GitHub Security Advisories: https://github.com/ThanosKa/magic-resume/security/advisories/new
- GitHub Issues (for non-sensitive security questions): https://github.com/ThanosKa/magic-resume/issues

Thank you for helping keep Magic Resume secure!

