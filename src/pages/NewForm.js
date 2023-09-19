import { MainNavbar } from "../components/Navbar/MainNavbar";
import { NewForm } from "../components/Form/NewForm";

function NewFormPage() {
    return <div className="row">
        <MainNavbar />
        <NewForm />
    </div>
}

export { NewFormPage };