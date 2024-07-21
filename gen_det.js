// Add event listener to the form
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
const firebaseConfig = {
		apiKey: "AIzaSyA_I4WDGDYsDCUr6tNVCC9ZcfDBfJJxpA8",
		authDomain: "family-census-details-3893d.firebaseapp.com",
		projectId: "family-census-details-3893d",
		storageBucket: "family-census-details-3893d.appspot.com",
		messagingSenderId: "416034387469",
		appId: "1:416034387469:web:5800cef9c8f2270307c744"
		};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById('submitForm').addEventListener('click', async (e) => {
    e.preventDefault();

    const form = document.getElementById('censusForm');
    
    const homeNumber = form.Home_number.value;
    const taxNumber = form.Tax_number.value;
    const address = form.Address.value;
    const fixed = form.Fixed.value;
    const mobile = form.Mobile.value;
    const whatsapp = form.wapp.value;
    const telegram = form.tele.value;
    const email = form.email.value;
    const subFamilies = form.sub_families.value;

    try {
        await addDoc(collection(db, 'generalHouseDetails'), {
            homeNumber,
            taxNumber,
            address,
            telephone: {
                fixed,
                mobile
            },
            socialMedia: {
                whatsapp,
                telegram
            },
            email,
            subFamilies
        });
        alert('Data successfully saved!');
        form.reset();
    } catch (error) {
        console.error('Error saving data: ', error);
        alert('Error saving data: ' + error.message);
    }
});