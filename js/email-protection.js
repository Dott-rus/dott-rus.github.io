document.addEventListener("DOMContentLoaded", function() {
    const emailLink = document.querySelector('a[href^="mailto:"]');
    const encryptedEmail = "ZG90dEBzb21lZG90dC5zcGFjZQ=="; // Base64 encoded "dott@somedott.space"
    const decryptedEmail = atob(encryptedEmail);

    emailLink.href = `mailto:${decryptedEmail}`;
});
