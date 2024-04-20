import MainPage from "../pages/mainPage";
import root from './app.module.scss'

const App = () => {
    return (
        <div className={root.app}>
            <MainPage />
        </div>
    )
}
 
export default App;