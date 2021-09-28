
import TranslationForm from "./TranslationForm";
import Navbar from "../Navbar";


//simple translationPage component.
function TranslationPage() {

    console.log('Translationpage.render')
    return (
        <>
            <Navbar></Navbar>
            <main className="TranslationPage">
                <h2> Sign Language</h2>
                <TranslationForm />
            </main>
        </>
    )
}


export default TranslationPage