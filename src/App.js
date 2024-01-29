/*!
=========================================================
* Muse Ant Design Dashboard - v1.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Tables from "./pages/Tables";
import Billing from "./pages/Billing";
import Rtl from "./pages/Rtl";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";
import "antd/dist/antd.js";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import Statistiques from "./pages/Statistiques";
import Annonces from "./pages/Annonces";
import Marque from "./pages/CRUD/Marque";
import Modele from "./pages/CRUD/Modele";
import Configuration from "./pages/CRUD/Configurations";
import LoginPage from "./components/login/LoginPage";
import AnneeModele from "./pages/CRUD/AnneeModele";
import BoiteDeVitesse from "./pages/CRUD/BoiteDeVitesse";
import CouleurVehicule from "./pages/CRUD/CouleurVehicule";
import Carburant from "./pages/CRUD/Carburant";
import CategorieVehicule from "./pages/CRUD/CategorieVehicule";
import NombrePlaces from "./pages/CRUD/NombrePlaces";
import EtatVehicule from "./pages/CRUD/EtatVehicule";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/connexion1" exact component={LoginPage} />
        <Route path="/connexion" exact component={SignIn} />
        <Main>
          <Route exact path="/statistique" component={Statistiques} />
          <Route exact path="/tables" component={Tables} />

        
          <Route exact path="/marques" component={Marque} />
          <Route exact path="/modeles" component={Modele} />
          <Route exact path="/configuration" component={Configuration} />
          <Route exact path="/anneeModele" component={AnneeModele} />
          <Route exact path="/boiteDeVitesse" component={BoiteDeVitesse} />
          <Route exact path="/couleurVehicule" component={CouleurVehicule} />
          <Route exact path="/carburant" component={Carburant} />
          <Route exact path="/categorieVehicule" component={CategorieVehicule} />
          <Route exact path="/nombrePlace" component={NombrePlaces} />
          <Route exact path="/etatVehicule" component={EtatVehicule} />






          {/* <Route exact path="/dashboard" component={Home} />
          <Route exact path="/billing" component={Billing} />
          <Route exact path="/rtl" component={Rtl} /> */}
          <Route exact path="/annonces" component={Annonces} />
          {/* <Redirect from="*" to="/statistique" /> */}
        </Main>
      </Switch>
    </div>
  );
}

export default App;
