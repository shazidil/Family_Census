// Add event listener to the form
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const homeNumber = document.querySelector('input[name="Home_number"]').value;
    const taxNumber = document.querySelector('input[name="Tax_number"]').value;
    const address = document.querySelector('input[name="Address"]').value;
    const fixed = document.querySelector('input[name="Fixed"]').value;
    const mobile = document.querySelector('input[name="Mobile"]').value;
    const whatsapp = document.querySelector('input[name="wapp"]').value;
    const telegram = document.querySelector('input[name="tele"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const subFamilies = document.querySelector('input[name="sub_families"]').value;

    // Save data to Firestore
    db.collection("generalHouseDetails").add({
        homeNumber: homeNumber,
        taxNumber: taxNumber,
        address: address,
        telephone: {
            fixed: fixed,
            mobile: mobile
        },
        socialMedia: {
            whatsapp: whatsapp,
            telegram: telegram
        },
        email: email,
        subFamilies: subFamilies
    })
    .then(() => {
        alert('Data successfully saved!');
        // Clear form fields
        document.querySelector('form').reset();
    })
    .catch((error) => {
        console.error('Error saving data: ', error);
        alert('Error saving data: ' + error.message);
    });
});
