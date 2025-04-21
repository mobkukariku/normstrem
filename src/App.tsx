
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage.tsx";
import {QuestionPage} from "./pages/QuestionPage.tsx";
import {FinalInfoPage} from "./pages/FinalInfoPage.tsx";

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/question" element={<QuestionPage />} />
            <Route path="/final" element={<FinalInfoPage />} />
        </Routes>
    </>
  )
}

export default App
