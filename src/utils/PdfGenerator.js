import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../firebase/firebaseInit';

export const fetchRegistrationData = async () => {
    try {
        const querySnapshot = await getDocs(collection(firestore, 'responses'));
        return querySnapshot.docs.map(doc => doc.data());
    } catch (error) {
        console.error('Error fetching data from Firestore: ', error);
        return [];
    }
};

export const generatePdf = async () => {
    const data = await fetchRegistrationData();

    const pdf = new jsPDF();
    pdf.text('Registration Data', 20, 10);

    const columns = ['Full Name', 'Registration Number', 'Mail ID', 'Contact Number'];
    const rows = data.map(entry => [entry.fullName, entry.registrationNumber, entry.mailId, entry.contactNumber]);

    pdf.autoTable({
        head: [columns],
        body: rows,
    });

    pdf.save('RegistrationData.pdf');
};